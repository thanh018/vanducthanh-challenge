import { createAction } from 'redux-actions';

import * as actionType from './constants';

export const login = createAction(actionType.LOGIN);

export const loginSuccess = createAction(actionType.LOGIN_SUCCESS);

export const loginFailed = createAction(actionType.LOGIN_FAILED);

export const logout = createAction(actionType.LOGOUT);

export const logoutSuccess = createAction(actionType.LOGOUT_SUCCESS);

export const logoutFailed = createAction(actionType.LOGOUT_FAILED);

export const setUserProfile = createAction(actionType.SET_USER_PROFILE);

export const setProjectInfo = createAction(actionType.SET_PROJECT_INFO);

export const setMenuPaths = createAction(actionType.SET_MENU_PATHS);

export const loadAuthInfoFromStorage = createAction(
  actionType.LOAD_AUTH_INFO_FROM_STORAGE,
);

export const clearAppState = createAction(actionType.CLEAR_APP_STATE);

export const getCurrentUserDataSuccess = createAction(
  actionType.GET_CURRENT_USER_DATA_SUCCESS,
);
