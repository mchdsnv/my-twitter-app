import React from 'react';
import {connect} from 'react-redux';
import {Col, Row, Icon } from 'antd';
import LoginForm from '../LoginForm';
import * as loginActions from '../../store/auth/auth-actions';

const Login = ({pending}) => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col span={8} offset={8}>
                    <p>You must log in to view the page</p>
                    { pending ? <Icon type="loading" style={{fontSize: '45px'}}/>: <LoginForm /> }
                </Col>
            </div>
        </Row>
    );
};

export default connect(() => (state) => ({pending: state.auth.pending}), loginActions)(Login);