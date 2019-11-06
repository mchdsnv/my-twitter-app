import React, {Component} from "react";

import "./post-form.css";

export default class PostForm extends Component {

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
        this.props.onAdded(this.state.message);
        this.setState({
            message: ''
        })
    };

    render() {
        const TweetText = 'You can write Tweets up to 280 characters here.';
        return(
            <form
                className="post-form form-group"
                onSubmit = {this.onSubmit}
            >
                <span>{this.state.counter}</span>
                <label>What do you want for share?</label>
                <textarea
                    className="form-control"
                    placeholder={TweetText}
                    onChange={ this.onTextChange }
                    maxLength="280"
                    value= {this.state.message}
                >
                </textarea>
                <button
                    type="submit"
                    className="btn btn-default float-right">
                    <i className="fa fa-twitter"></i>Tweet now
                </button>
            </form>
        );
    }
}