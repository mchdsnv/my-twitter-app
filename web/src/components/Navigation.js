import React from "react";

import Home from "./Pages/Home";
import Feed from "./Pages/Feed";
import Notfound from "./Pages/Notfound";
import Login from "./Pages/Login";

import {Route, Switch } from 'react-router-dom';

const Navigation = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/feed" component={Feed} />
            <Route path="/login" component={Login} />
            <Route component={Notfound} />
        </Switch>
    );
};

export default Navigation;