import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = ({ component: Component, account, ...rest }) => (
    <Route {...rest} render={(props) => (
        account
            ? <Component {...props} />
            : <Redirect to="/login" />
    )} />
);

export default connect(()=>(state)=>({account: state.auth.account}))(PrivateRoute);