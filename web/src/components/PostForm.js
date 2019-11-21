import React, {useState} from "react";
import { Form, Input, Button, Icon } from 'antd';
import {connect} from 'react-redux';
import * as actions from '../store/twitter/twitter-actions';

const { TextArea } = Input;

const CustomizedForm = (props) => {
    const { getFieldDecorator } = props.form;

    const handleChange = (event) => { props.updCounter( event.target.value.length )};
    const handlePressEnter = (event) => ((event.shiftKey) ? false : handleSubmit(event));
    const handleSubmit = (event) => {
        event.preventDefault();
        props.form.validateFields((error, values) => {
            if (!error) {
                props.addPost(values.message);
                props.form.resetFields();
            }
        });
    };

    return(
        <Form
            onSubmit = {handleSubmit}
        >
            <Form.Item>
                <span>What do you want for share?</span>
                <p>{props.counter}</p>
                {getFieldDecorator('message', {
                    rules: [{ required: true, message: 'The message cannot be empty!' }],
                })(
                    <TextArea
                        autoSize={ {minRows: 5, maxRows: 10} }
                        name="twitter_message"
                        placeholder="You can write Tweets up to 280 characters here."
                        onChange={handleChange}
                        onPressEnter={handlePressEnter}
                        maxLength="280"
                        autoFocus
                    />,
                )}
            </Form.Item>
            <Form.Item style={{ textAlign: 'right' }}>
                <Button
                    type="primary"
                    htmlType="submit">
                    <Icon type="twitter" />
                    Tweet now
                </Button>
            </Form.Item>
        </Form>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts.posts,
        counter: state.counter
    };
};

export default connect(mapStateToProps, actions)(Form.create({ name: 'post-form' })(CustomizedForm));