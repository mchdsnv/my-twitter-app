import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import * as actions from '../store/auth/auth-actions';
import {Button} from "antd";

const AuthButton = withRouter(({ authenticated, userLogout }) => (
    authenticated === true ? (
        <span>
            <Button
                type="primary"
                onClick={userLogout}
            >
                Sign out
            </Button>
        </span>
    ) : (
        <Link to="/login">Login</Link>
    )
));

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
};

export default connect(mapStateToProps, actions)(AuthButton);