import {Col, Row } from "antd";
import React from "react";
import SignupForm from "../SignupForm";

const Signup = () => {
    return (
        <Row>
            <div style={{ background: '#fff', minHeight: 280, textAlign: 'center' }}>
                <Col>
                    <SignupForm />
                </Col>
            </div>
        </Row>
    );
};

export default Signup;