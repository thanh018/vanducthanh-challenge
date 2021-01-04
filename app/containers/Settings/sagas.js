import { all, takeEvery, put } from 'redux-saga/effects';
import store from 'store';
import qs from 'qs';

import {
  setSettingState,
  changeSettingAction,
  setPrimaryColor,
} from './actions';
import { CHANGE_SETTING, SET_PRIMARY_COLOR, TOGGLE_THEME } from './constants';

import history from 'utils/history';
import { store as reduxStore } from 'configureStore';

export function* changeSettingSaga({ payload: { setting, value } }) {
  yield store.set(`app.settings.${setting}`, value);
  yield put(
    setSettingState({
      [setting]: value,
    }),
  );
  // yield put({
  //   type: 'settings/SET_STATE',
  //   payload: {
  //     [setting]: value,
  //   },
  // });
}

export function* setPrimaryColorSaga({ payload: { color } }) {
  const addStyles = () => {
    const styleElement = document.querySelector('#primaryColor');
    if (styleElement) {
      styleElement.remove();
    }
    const body = document.querySelector('body');
    const styleEl = document.createElement('style');
    const css = document.createTextNode(
      `:root { --kit-color-primary: ${color};}`,
    );
    styleEl.setAttribute('id', 'primaryColor');
    styleEl.appendChild(css);
    body.appendChild(styleEl);
  };

  yield addStyles();
  yield changeSettingAction({
    setting: 'primaryColor',
    value: color,
  });
}

export function* toggleThemeSaga() {
  const currentTheme = reduxStore.getState().settings.theme;
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  const toggleTheme = () => {
    if (nextTheme === 'light') {
      document.querySelector('body').classList.remove('kit__dark');
      // window.less.modifyVars(AntDesignLightTheme);
    } else {
      document.querySelector('body').classList.add('kit__dark');
      // window.less.modifyVars(AntDesignDarkTheme);
      changeSettingAction({
        setting: 'menuColor',
        value: 'dark',
      });
    }
  };

  yield toggleTheme();
  yield changeSettingAction({
    setting: 'theme',
    value: nextTheme,
  });
}

export function* setup() {
  // load settings from url on app load
  const changeSettings = search => {
    const query = qs.parse(search, { ignoreQueryPrefix: true });
    Object.keys(query).forEach(key => {
      let value;
      switch (query[key]) {
        case 'false':
          value = false;
          break;
        case 'true':
          value = true;
          break;
        default:
          value = query[key];
          break;
      }
      reduxStore.dispatch(
        changeSettingAction({
          setting: key,
          value,
        }),
      );
      // reduxStore.dispatch({
      //   type: 'settings/CHANGE_SETTING',
      //   payload: {
      //     setting: key,
      //     value,
      //   },
      // });
    });
  };
  yield changeSettings(history.location.search);
  yield history.listen(params => {
    const { search } = params;
    changeSettings(search);
  });

  // set primary color on app load
  const primaryColor = () => {
    const color = store.get('app.settings.primaryColor');
    if (color) {
      reduxStore.dispatch(
        setPrimaryColor({
          color,
        }),
      );
    }
  };
  yield primaryColor();

  // set primary color on app load
  const initTheme = () => {
    const theme = store.get('app.settings.theme');
    if (theme === 'dark') {
      document.querySelector('body').classList.add('kit__dark');
      // global.window.less.modifyVars(AntDesignDarkTheme);
    }
    // else {
    //   global.window.less.modifyVars(AntDesignLightTheme);
    // }
  };
  yield initTheme();

  // detect isMobileView setting on app load and window resize
  const isMobileView = (load = false) => {
    const currentState = global.window.innerWidth < 768;
    const prevState = store.get('app.settings.isMobileView');
    if (currentState !== prevState || load) {
      reduxStore.dispatch(
        changeSettingAction({
          setting: 'isMobileView',
          value: currentState,
        }),
      );
    }
  };

  // detect viewport width on app load and window resize
  const isMenuToggled = () => {
    const shouldToggle = global.window.innerWidth < 1024;
    const prevState = store.get('app.settings.isMenuCollapsed');
    if (shouldToggle || prevState) {
      reduxStore.dispatch(
        changeSettingAction({
          setting: 'isMenuCollapsed',
          value: true,
        }),
      );
    }
  };

  yield isMobileView(true);
  yield isMenuToggled();
  yield window.addEventListener('resize', () => {
    isMobileView();
    isMenuToggled();
  });
}

function* settingsSagasWatcher() {
  yield takeEvery(CHANGE_SETTING, changeSettingSaga);
  yield takeEvery(SET_PRIMARY_COLOR, setPrimaryColorSaga);
  yield takeEvery(TOGGLE_THEME, toggleThemeSaga);
}

export default function* rootSaga() {
  yield all([
    settingsSagasWatcher(),
    setup(), // run once on app load to init listeners
  ]);
}
