import React from "react";

import { Form, Icon, Input, Button } from 'antd';
import './LoginForm.css';

const LoginForm = (props) => {
    const { getFieldDecorator } = props.form;
    const handlePressEnter = (event) => ((event.shiftKey) ? false : handleSubmit(event));
    const handleSubmit = (event) => {
        event.preventDefault();
        props.form.validateFields((error, values) => {
            if (!error) {
                console.log('Received values of form: ', values);
            }
        });
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        onPressEnter={handlePressEnter}
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        onPressEnter={handlePressEnter}
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    on
                >
                    Log in
                </Button>
                Or <a href="/signup">register now!</a>
            </Form.Item>
        </Form>
    );
};

export default Form.create({ name: 'login-form' })(LoginForm);