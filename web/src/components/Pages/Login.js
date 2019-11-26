import {Col, Row } from "antd";
import LoginForm from "../LoginForm";
import React from "react";

const Login = () => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col span={8} offset={8}>

                        <LoginForm />

                </Col>
            </div>
        </Row>
    );
};

export default Login;