import React from 'react';

import Feed from './Pages/Feed';
import Notfound from './Pages/Notfound';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './PrivateRoute';

import {Route, Switch } from 'react-router-dom';

const Navigation = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Feed} />
            <PrivateRoute path="/feed" component={Feed} />
            <Route path="/login" component={Login} />
            <Route path="/logout" />
            <Route path="/register" component={Register} />
            <Route component={Notfound} />
        </Switch>
    );
};

export default Navigation;