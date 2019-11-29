import React from "react";

import {Form, Input, Tooltip, Icon, Button} from 'antd';

const SignupForm = (props) => {
    const { getFieldDecorator } = props.form;
    const handleSubmit = (event) => {
        event.preventDefault();
        props.form.validateFieldsAndScroll((error, values) => {
            if (!error) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const handleConfirmBlur = (event) => {
        const { value } = event.target;
        // setState({ confirmDirty: state.confirmDirty || !!value });
    };

    const compareToFirstPassword = (rule, value, callback) => {
        const { form } = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        const { form } = props;
        // if (value && state.confirmDirty) {
        //     form.validateFields(['confirm'], { force: true });
        // }
        callback();
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6,
                offset: 2
            },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: {
                span: 14,
                offset: 2
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item
                label={
                    <span>
                        Name&nbsp;
                        <Tooltip title="What do you want others to call you?">
                         <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: validateToNextPassword,
                        },
                    ],
                })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        {
                            validator: compareToFirstPassword,
                        },
                    ],
                })(<Input.Password onBlur={handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Form.create({ name: 'signup-form' })(SignupForm);