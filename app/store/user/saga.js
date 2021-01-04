import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import {
  setUserProfile,
  setProjectInfo,
  loginSuccess,
  loginFailed,
  logoutFailed,
  clearAppState,
  getCurrentUserDataSuccess,
} from './actions';
import { LOGIN, LOGOUT, LOAD_AUTH_INFO_FROM_STORAGE } from './constants';

import * as auth from 'utils/authHelper';
import {
  login,
  logout,
  getCurrentUser,
  FIELDS,
  fakeLogin,
  fakeLogout,
  getFakeCurrentUser, } from 'apis/userApi';
import { INVALID_CREDENTIAL_ERR } from 'apis/constants';
import { SIGN_IN_URI } from 'constants/routes';
import errorConverter from 'apis/errorConverter';
import { showNotification } from 'containers/Notification/actions';
import { ERROR_TYPE } from 'components/BasicComponents/Notification';

export function* loginSaga(action) {
  try {
    const response = yield call(fakeLogin, action.payload);

    if (response.token) {
      // TO DO Check Auth with Remember me
      const body = response;
      const tokenInfo = {
        accessToken: body[FIELDS.ACCESS_TOKEN],
        accessTokenExpiresIn: body[FIELDS.ACCESS_TOKEN_EXPIRE_IN],
        refreshToken: body[FIELDS.REFRESH_TOKEN],
        refreshTokenExpiresIn: body[FIELDS.REFRESH_TOKEN_EXPIRE_IN],
      };

      // set token to cookie
      auth.setAccessToken(
        tokenInfo.accessToken,
        tokenInfo.accessTokenExpiresIn,
      );

      // TO DO Check Auth with Remember me
      // store refresh token
      if (tokenInfo.refreshToken) {
        auth.setRefreshToken(tokenInfo.refreshToken);
      }

      const userDataResponse = yield call(getFakeCurrentUser);

      if (userDataResponse) {
        // set user info to localStorage
        auth.setUserInfo(userDataResponse);

        const lastProject = get(userDataResponse, FIELDS.JWT_PROJECT, {});

        if (lastProject) {
          // set last project to localStorage
          auth.setProjectInfo(lastProject);
        }

        yield put(getCurrentUserDataSuccess(userDataResponse));
      }
      yield put(loginSuccess(tokenInfo));
    } else {
      const convertedError = errorConverter(response);

      yield put(
        showNotification({
          type: ERROR_TYPE,
          message: convertedError.messageKey,
        }),
      );

      yield put(loginFailed(convertedError));
    }
  } catch (error) {
    if (error && error.code === 401 && error.type === INVALID_CREDENTIAL_ERR) {
      yield put(
        showNotification({
          type: ERROR_TYPE,
          message: 'login.form.error.invalidCredential',
        }),
      );

      yield put(loginFailed(error));
    } else {
      const convertedError = errorConverter(error);

      yield put(
        showNotification({
          type: ERROR_TYPE,
          message: convertedError.messageKey,
        }),
      );
      yield put(loginFailed(convertedError));
    }
  }
}

export function* logoutSaga(action) {
  const { history } = action.payload;

  try {
    const response = yield call(fakeLogout, action.payload);

    if (response.resultCode === 'OK' || response === '') {
      auth.clearUserCredential();

      // clear app state
      yield put(clearAppState());

      // redirect to sign in page
      history.push(SIGN_IN_URI);
    } else {
      const convertedError = errorConverter(response);

      yield put(
        showNotification({
          type: ERROR_TYPE,
          message: convertedError.messageKey,
        }),
      );
      yield put(logoutFailed(convertedError));
    }
  } catch (error) {
    console.error(error);
    const convertedError = errorConverter(error);

    // force clear credential even logout failed
    auth.clearUserCredential();
    yield put(logoutFailed(convertedError));

    // redirect to sign in page
    history.push(SIGN_IN_URI);
  }
}

export function* loadAuthInfoFromStorageSaga() {
  const userInfo = auth.getUserInfo();

  if (userInfo) {
    // set user profile
    yield put(setUserProfile(userInfo));
  }

  const projectInfo = auth.getUserProjectInfo();
  if (projectInfo) {
    // set user project
    yield put(setProjectInfo(projectInfo));
  }
}

export default function* userSagasWatcher() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(LOAD_AUTH_INFO_FROM_STORAGE, loadAuthInfoFromStorageSaga);
}
