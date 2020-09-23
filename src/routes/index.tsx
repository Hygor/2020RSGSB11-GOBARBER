import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={Signup} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
