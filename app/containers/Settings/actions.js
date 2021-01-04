import { createAction } from 'redux-actions';

import {
  SET_STATE,
  CHANGE_SETTING,
  SET_PRIMARY_COLOR,
  TOGGLE_THEME,
} from './constants';

export const setSettingState = createAction(SET_STATE);

export const changeSettingAction = createAction(CHANGE_SETTING);

export const setPrimaryColor = createAction(SET_PRIMARY_COLOR);

export const toggleTheme = createAction(TOGGLE_THEME);
