import store from 'store';

import { APP_NAME } from 'constants/common';

const actions = {
  SET_STATE: 'settings/SET_STATE',
  CHANGE_SETTING: 'settings/CHANGE_SETTING',
  SET_PRIMARY_COLOR: 'settings/SET_PRIMARY_COLOR',
  TOGGLE_THEME: 'settings/TOGGLE_THEME',
};

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
    // TODO: Config Setting
    isMobileView: false,
    isMobileMenuOpen: false,
    isLightTheme: true,
    isSettingsOpen: false,
    isMenuTop: false,
    isMenuCollapsed: false,
    isBorderless: true,
    isSquaredBorders: false,
    isFixedWidth: false,
    isMenuShadow: true,
    menuLayoutType: 'left', // top | nomenu | left
    locale: 'en-US',
    appName: APP_NAME,
    menuColor: 'dark',
    hasLogo: false,
    leftMenuWidth: 256,
    theme: 'dark', // light, dark
  }),
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    case actions.CHANGE_SETTING:
      return { ...state, [action.payload.setting]: action.payload.value };
    default:
      return state;
  }
}
