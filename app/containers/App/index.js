import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DemoPage from 'pages/DemoPage/index';

import { HOME_URI } from 'constants/routes';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path={HOME_URI} component={DemoPage} />
        <Route path="" component={DemoPage} />
      </Switch>
    </>
  );
}
