import cookies from './cookies';

import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_INFO,
  PROJECT_INFO,
  MENU,
} from 'constants/common';

export const clearUserCredential = () => {
  clearAccessToken();
  clearRefreshToken();
  clearUserInfo();
  clearUserProjectInfo();
  clearUserMenuPaths();
};

// access token
export const setAccessToken = (accessToken, accessTokenExpiresIn) => {
  cookies.setItem(ACCESS_TOKEN, accessToken, accessTokenExpiresIn);
};

export const getAccessToken = () => cookies.getItem(ACCESS_TOKEN);

export const clearAccessToken = () => {
  cookies.removeItem(ACCESS_TOKEN);
};

// refresh token
export const setRefreshToken = refreshToken => {
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

export const clearRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

// user info
export const setUserInfo = userInfo => {
  localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
};

// project info
export const setProjectInfo = projectInfo => {
  localStorage.setItem(PROJECT_INFO, JSON.stringify(projectInfo));
};

export const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO);
  if (userInfo) {
    return JSON.parse(userInfo);
  }

  return null;
};

export const clearUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};

// user Project info
export const setUserProjectInfo = ProjectInfo => {
  localStorage.setItem(PROJECT_INFO, JSON.stringify(ProjectInfo));
};

export const getUserProjectInfo = () => {
  const userProjectInfo = localStorage.getItem(PROJECT_INFO);
  if (userProjectInfo) {
    return JSON.parse(userProjectInfo);
  }

  return null;
};

export const clearUserProjectInfo = () => {
  localStorage.removeItem(PROJECT_INFO);
};

// menu
export const setUserMenuPaths = menuPaths => {
  localStorage.setItem(MENU, JSON.stringify(menuPaths));
};

export const getUserMenuPaths = () => {
  const userMenuPaths = localStorage.getItem(MENU);
  if (userMenuPaths) {
    return JSON.parse(userMenuPaths);
  }

  return null;
};

export const clearUserMenuPaths = () => {
  localStorage.removeItem(MENU);
};
