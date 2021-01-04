/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

import classNames from 'classnames';

import style from './style.module.scss';
import { changeSettingAction, setPrimaryColor, toggleTheme } from './actions';
import saga from './sagas';
import { SETTINGS_KEY } from './constants';

import { useInjectSaga } from 'utils/injectSaga';
import Tooltip from 'components/BasicComponents/Tooltip';
import { Radio } from 'components/BasicComponents/RadioGroup';

function Settings(props) {
  const {
    isSidebarOpen,
    menuLayoutType,
    menuColor,
    // actions
    onChangeSetting,
  } = props;
  useInjectSaga({ key: SETTINGS_KEY, saga });

  // const [defaultColor, setDefaultColor] = "#4b7cf3";

  // const switchDarkTheme = () => {
  //   toggleTheme();
  // };

  // const selectColor = throttle(color => {
  //   setPrimaryColor({
  //     color,
  //   });
  // }, 200);

  // const resetColor = () => {
  //   // this.setState({
  //   //   primaryColor: defaultColor,
  //   // });
  //   setPrimaryColor({
  //     color: defaultColor,
  //   });
  // };

  // const changeSetting = (setting, value) => {
  //   onChangeSetting({
  //     setting,
  //     value,
  //   });
  // };

  const toggleSettings = e => {
    e.preventDefault();

    onChangeSetting({
      setting: 'isSidebarOpen',
      value: !isSidebarOpen,
    });
  };

  // const selectMenuType = e => {
  //   const { value } = e.target;

  //   onChangeSetting({
  //     setting: 'menuType',
  //     value,
  //   });
  // };

  const selectMenuLayoutType = e => {
    const { value } = e.target;
    onChangeSetting({
      setting: 'menuLayoutType',
      value,
    });
  };

  const colorPickerHandler = (e, setting, value) => {
    e.preventDefault();
    onChangeSetting({
      setting,
      value,
    });
  };

  const ColorPicker = colorProps =>
    colorProps.colors.map(item => (
      <a
        href="#"
        key={item}
        onClick={e => colorPickerHandler(e, colorProps.setting, item)}
        className={classNames(`${style.cui__sidebar__select__item}`, {
          [style.cui__sidebar__select__item__active]: colorProps.value === item,
          [style.cui__sidebar__select__item__black]: item === 'dark',
          [style.cui__sidebar__select__item__white]: item === 'white',
          [style.cui__sidebar__select__item__gray]: item === 'gray',
          [style.cui__sidebar__select__item__blue]: item === 'blue',
          [style.cui__sidebar__select__item__img]: item === 'image',
        })}
      />
    ));

  return (
    <div>
      <div
        className={classNames(style.cui__sidebar, {
          [style.cui__sidebar__toggled]: isSidebarOpen,
        })}
      >
        <Scrollbars
          autoHide
          renderThumbVertical={({ ...scrollProps }) => (
            <div
              {...scrollProps}
              style={{
                width: '5px',
                borderRadius: 'inherit',
                backgroundColor: 'rgba(195, 190, 220, 0.4)',
                left: '1px',
              }}
            />
          )}
        >
          <div className={style.cui__sidebar__inner}>
            <a
              href="#"
              className={`fe fe-x-circle ${style.cui__sidebar__close}`}
              onClick={toggleSettings}
            />
            <h5>
              <strong>Theme Settings</strong>
            </h5>
            <div
              className="cui__utils__line"
              style={{ marginTop: 25, marginBottom: 30 }}
            />
            <div>
              <div className={style.cui__sidebar__type}>
                <div className={style.cui__sidebar__type__title}>
                  <span>Menu Layout</span>
                </div>
                <div className={style.cui__sidebar__type__items}>
                  <Radio.Group
                    onChange={selectMenuLayoutType}
                    defaultValue={menuLayoutType}
                  >
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-2">
                          <Radio value="left">Left Menu</Radio>
                        </div>
                        <div className="mb-2">
                          <Radio value="top">Top Menu</Radio>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-2">
                          <Radio value="nomenu">No menu</Radio>
                        </div>
                      </div>
                    </div>
                  </Radio.Group>
                </div>

                <div className={style.cui__sidebar__item}>
                  <div className={style.cui__sidebar__label}>Menu: Color</div>
                  <div className={style.cui__sidebar__container}>
                    <ColorPicker
                      setting="menuColor"
                      value={menuColor}
                      colors={['white', 'gray', 'dark']}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
      <Tooltip title="Settings" placement="left">
        <a
          onClick={toggleSettings}
          style={{ bottom: '40px' }}
          className={style.cui__sidebar__toggleButton}
          href="#"
        >
          <i className="fe fe-settings" />
        </a>
      </Tooltip>
    </div>
  );
}

const mapStateToProps = ({ settings }) => ({
  isSidebarOpen: settings.isSidebarOpen,
  isMenuCollapsed: settings.isMenuCollapsed,
  isMenuShadow: settings.isMenuShadow,
  isMenuUnfixed: settings.isMenuUnfixed,
  menuLayoutType: settings.menuLayoutType,
  menuColor: settings.menuColor,
  authPagesColor: settings.authPagesColor,
  isTopbarFixed: settings.isTopbarFixed,
  isContentMaxWidth: settings.isContentMaxWidth,
  isAppMaxWidth: settings.isAppMaxWidth,
  isGrayBackground: settings.isGrayBackground,
  isGrayTopbar: settings.isGrayTopbar,
  isCardShadow: settings.isCardShadow,
  isSquaredBorders: settings.isSquaredBorders,
  isBorderless: settings.isBorderless,
  routerAnimation: settings.routerAnimation,
  locale: settings.locale,
  theme: settings.theme,
  primaryColor: settings.primaryColor,
  leftMenuWidth: settings.leftMenuWidth,
  appName: settings.appName,
});

const mapDispatchToProps = {
  onChangeSetting: changeSettingAction,
  toggleTheme,
  setPrimaryColor,
};

// const withSaga = injectSaga({ key: SETTINGS_KEY, saga });

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  // withSaga,
);

export default enhance(Settings);
