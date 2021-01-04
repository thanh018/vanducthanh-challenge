import store from 'store';
import { handleActions } from 'redux-actions';

import { setSettingState, changeSettingAction } from './actions';

import { APP_NAME } from 'constants/common';

const STORED_SETTINGS = storedSettings => {
  const settings = {};
  Object.keys(storedSettings).forEach(key => {
    const item = store.get(`app.settings.${key}`);
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key];
  });
  return settings;
};

const initialState = {
  ...STORED_SETTINGS({
    isMobileView: false,
    isMobileMenuOpen: false,
    isLightTheme: false,
    isSettingsOpen: false,
    isMenuTop: false,
    isMenuCollapsed: false,
    isSidebarOpen: false,
    isBorderless: true,
    isSquaredBorders: false,
    isFixedWidth: false,
    isMenuUnfixed: false,
    isMenuShadow: false,
    menuLayoutType: 'left', // top | nomenu | left
    locale: 'en-US',
    appName: APP_NAME,
    hasLogo: false,
    leftMenuWidth: 256,
    routerAnimation: 'slide-fadein-up', // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
    menuColor: 'white', // white, dark, gray
    theme: 'light', // light, dark
    primaryColor: '#4b7cf3',
    isTopbarFixed: true,
    isGrayTopbar: false,
    isContentMaxWidth: false,
    isAppMaxWidth: false,
    isGrayBackground: false,
    isCardShadow: true,
  }),
};

const settingReducer = handleActions(
  {
    [setSettingState]: (state, action) => ({ ...state, ...action.payload }),
    [changeSettingAction]: (state, action) => ({
      ...state,
      [action.payload.setting]: action.payload.value,
    }),
  },
  initialState,
);

export default settingReducer;
