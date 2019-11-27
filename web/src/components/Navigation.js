import React from "react";

import Home from "./Pages/Home";
import Feed from "./Pages/Feed";
import Notfound from "./Pages/Notfound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivateRoute from "./PrivateRoute";

import {Route, Switch } from 'react-router-dom';

const Navigation = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <PrivateRoute path="/feed" component={Feed} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Notfound} />
        </Switch>
    );
};

export default Navigation;