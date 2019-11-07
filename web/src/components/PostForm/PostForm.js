import React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: block;
    border: 1px solid #1da1f2;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    float: right;
    background-color: #1da1f2;
    color: #fff;
    cursor: pointer;
    font-family: 'FontAwesome';
    font-size: 14px;
    
    :hover {
        background-color: #1B95E0;
        border-color: #1B95E0;
        color: #fff;
    }
    
    > i {
        margin-right: 5px;
    }
    `;

const Counter = styled.span`
    display: block;
    `;

const Textarea = styled.textarea`
    height: 100px;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    resize: vertical;
    `;

const Form = styled.form`
    margin-top: 10px;
    `;

class PostForm extends React.Component {

    state = {
        message: '',
        counter: 0
    };

    onTextChange = (event) => {
        this.setState( {
                message: event.target.value,
                counter: event.target.value.length
            }
        );
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.message);
        this.setState({
            message: '',
            counter: 0
        });
    };

    render() {
        return(
            <Form onSubmit = {this.onSubmit}>
                <strong>What do you want for share?</strong>
                <Counter>{this.state.counter}</Counter>
                <Textarea
                    placeholder="You can write Tweets up to 280 characters here."
                    onChange={this.onTextChange}
                    maxLength="280"
                    value={this.state.message}
                />
                <Button>
                    <i className="fab fa-twitter"></i>
                    Tweet now
                </Button>
            </Form>
        );
    }
}

export default PostForm;