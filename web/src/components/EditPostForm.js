import React, {useState} from "react";

import { Form, Input, Button, Icon } from 'antd';
import {connect} from 'react-redux';
import * as actions from '../store/feed/feed-actions';

const { TextArea } = Input;

const EditPostForm = (props) => {
    const [state, setState] = useState({
        counter: 0
    });
    const { getFieldDecorator } = props.form;

    const handleChange = (event) => {
        setState({
            counter: event.target.value.length
        });
    };

    const handlePressEnter = (event) => ((event.shiftKey) ? false : handleSubmit(event));
    const handleSubmit = (event) => {
        event.preventDefault();
        props.form.validateFields((error, values) => {
            if (!error) {
                props.updatePost(props.post, values.content);
                props.showEditForm();

                setState({
                    counter: 0
                });
            }
        });
    };

    return(
        <Form
            onSubmit = {handleSubmit}
        >
            <Form.Item>
                <p>{state.counter}</p>
                {getFieldDecorator('content', {
                    rules: [{ required: true,
                        message: 'The message cannot be empty!'
                    }],
                    initialValue: props.post.content
                })(
                    <TextArea
                        autoSize={ {minRows: 5, maxRows: 10} }
                        name="twitter_message"
                        placeholder="You can write Tweets up to 280 characters here."
                        onChange={handleChange}
                        onPressEnter={handlePressEnter}
                        maxLength="280"
                    />,
                )}
            </Form.Item>
            <Form.Item style={{ textAlign: 'right' }}>
                <Button
                    type="primary"
                    htmlType="submit">
                    <Icon type="twitter" />
                    Update
                </Button>
            </Form.Item>
        </Form>
    );
};

export default connect(null, actions)(Form.create({ name: 'post-form' })(EditPostForm));