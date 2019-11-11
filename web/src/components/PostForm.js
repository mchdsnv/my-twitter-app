import React from "react";
import styled from "styled-components";
import { FaTwitter } from 'react-icons/fa';

import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const Counter = styled.span`
    display: block;
    `;

class CustomizedPostForm extends React.Component {

    state = {
        message: '',
        counter: 0
    };

    handleChange = (event) => {
        console.log(event.target.value);
        this.props.form.setFieldsValue( {
                message: event.target.value,
                counter: event.target.value.length
            }
        );
        // this.setState( {
        //         message: event.target.value,
        //         counter: event.target.value.length
        //     }
        // );
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                this.props.onAdd(this.state.message);

                this.props.form.setFieldsValue({
                    message: '',
                    counter: 0
                });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form
                onSubmit = {this.handleSubmit}
            >
                <Form.Item>What do you want for share?</Form.Item>
                <Form.Item><Counter>{this.state.counter}</Counter></Form.Item>
                <Form.Item label="Message">
                    {getFieldDecorator('message', {
                        initialValue: this.props.message,
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ required: true, message: 'The message cannot be empty!' }],
                    })(
                        <TextArea
                            name ="twitter_message"
                            placeholder="You can write Tweets up to 280 characters here."
                            onChange={this.handleChange}
                            maxLength="280"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        <FaTwitter />
                        Tweet now
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const PostForm = Form.create({ name: 'post-form' })(CustomizedPostForm);

export default PostForm;