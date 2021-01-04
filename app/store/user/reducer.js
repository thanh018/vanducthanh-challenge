import { handleActions } from 'redux-actions';

import {
  login,
  loginSuccess,
  loginFailed,
  setUserProfile,
  setProjectInfo,
  setMenuPaths,
  getCurrentUserDataSuccess,
} from './actions';

export const initialState = {
  loginResult: {
    loading: false,
    error: null,
  },
  tokenInfo: null,
  profile: null,
  projectInfo: null,
  menuPaths: null,
  userInfo: {},
};

const userReducer = handleActions(
  {
    [login]: state => ({
      ...state,
      loginResult: {
        ...state.loginResult,
        loading: true,
        error: null,
      },
    }),

    [loginSuccess]: (state, action) => ({
      ...state,
      loginResult: {
        ...state.loginResult,
        loading: false,
      },
      tokenInfo: action.payload,
    }),

    [loginFailed]: (state, action) => ({
      ...state,
      loginResult: {
        ...state.loginResult,
        loading: false,
        error: action.payload,
      },
      tokenInfo: null,
    }),

    [setUserProfile]: (state, action) => ({
      ...state,
      profile: action.payload,
    }),

    [setProjectInfo]: (state, action) => ({
      ...state,
      projectInfo: action.payload,
    }),

    [setMenuPaths]: (state, action) => ({
      ...state,
      menuPaths: action.payload,
    }),

    [getCurrentUserDataSuccess]: (state, action) => {
      const { payload: userInfo } = action;
      return {
        ...state,
        userInfo,
      };
    },
  },

  initialState,
);

export default userReducer;
