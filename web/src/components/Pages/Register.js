import React from 'react';
import {Col, Row } from 'antd';
import SignupForm from '../SignupForm';

const Register = () => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col>
                    <p>Signup now</p>
                    <SignupForm />
                </Col>
            </div>
        </Row>
    );
};

export default Register;