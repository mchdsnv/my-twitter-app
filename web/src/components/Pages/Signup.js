import React from 'react';
import {connect} from 'react-redux';
import {Col, Icon, Row} from 'antd';
import SignupForm from '../SignupForm';
import * as signupActions from '../../store/auth/auth-actions';

const Signup = ({pending}) => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col>
                    <p>Signup now</p>
                    { pending ? <Icon type="pending" style={{fontSize: '45px'}}/> : <SignupForm />}
                </Col>
            </div>
        </Row>
    );
};

export default connect(() => (state) => ({pending: state.auth.pending}), signupActions)(Signup);