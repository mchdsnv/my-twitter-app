import React from "react";
import { Form, Input, Button, Icon } from 'antd';

const { TextArea } = Input;

class CustomizedPostForm extends React.Component {

    state = {
        message: '',
        counter: 0
    };

    handleChange = (event) => {
        this.setState({
            counter: event.target.value.length
        });
    };

    handlePressEnter = (event) => {
        if(!event.shiftKey) {
            this.handleSubmit(event);;
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                this.props.onAdd(values.message);
                this.props.form.resetFields();
            }
        });

        this.setState({
            counter: 0
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form
                onSubmit = {this.handleSubmit}
            >
                <Form.Item>

                </Form.Item>
                <Form.Item>
                    <span>What do you want for share?</span>
                    <p>{this.state.counter}</p>
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'The message cannot be empty!' }],
                    })(
                        <TextArea
                            autoSize = { {minRows: 5, maxRows: 10} }
                            name ="twitter_message"
                            placeholder="You can write Tweets up to 280 characters here."
                            onChange={this.handleChange}
                            onPressEnter={this.handlePressEnter}
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
    }
}

const PostForm = Form.create({ name: 'post-form' })(CustomizedPostForm);

export default PostForm;