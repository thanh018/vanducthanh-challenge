import React from 'react';
import { FormattedMessage } from 'react-intl';

const actions = {
  SET_STATE: 'menu/SET_STATE',
  GET_DATA: 'menu/GET_DATA',
};

const initialState = {
  menuData: [
    {
      title: <FormattedMessage id="menu.storybook" />,
      key: 'storybook',
      icon: 'icmn icmn-book',
      url: '/storybook',
    },
    {
      title: <FormattedMessage id="menu.project" />,
      key: 'project',
      icon: 'icmn icmn-folder-open',
      url: '/project',
    },
    {
      title: <FormattedMessage id="menu.userManagement" />,
      key: 'demo',
      icon: 'icmn icmn-user',
      url: '/demo-page',
    },
    {
      title: <FormattedMessage id="menu.reportDefaultRisk" />,
      key: 'defaultRisk',
      icon: 'icmn icmn-table',
      url: '/working-report-default-risk',
    },
    {
      title: <FormattedMessage id="menu.reportResidualRisk" />,
      key: 'residualRisk',
      icon: ' icmn icmn-calendar',
      url: '/working-report-residual-risk',
    },
    {
      title: <FormattedMessage id="menu.timeSeriesReport" />,
      key: 'timeSeriesReport',
      icon: ' icmn icmn-file-text2',
      url: '/time-series-report',
    },
  ],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
