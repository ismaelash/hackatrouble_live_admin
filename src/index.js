import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import * as Constants from './components/Constants';
import Dashboard from './components/Dashboard';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path={Constants.ROUTE_SIGNIN} component={Signin} />
        <Route exact path={Constants.ROUTE_SIGNUP} component={Signup} />
        <Route exact path={Constants.ROUTE_DASHBOARD} component={Dashboard} />
      </Switch>
    </BrowserRouter>, 
  document.getElementById('root'));