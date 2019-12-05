import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
        authenticated === true
            ? <Component {...props} />
            : <Redirect to="/login" />
    )} />
);

export default connect(()=>(state)=>({authenticated: state.auth.authenticated}))(PrivateRoute);