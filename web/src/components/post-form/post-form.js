import React from "react";

import "./post-form.css";

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
        const TweetText = 'You can write Tweets up to 280 characters here.';
        return(
            <form
                className="post-form form-group"
                onSubmit = {this.onSubmit}
            >
                <strong>What do you want for share?</strong>
                <div>
                    <div>{this.state.counter}</div>
                    <textarea
                        className="form-control"
                        placeholder={TweetText}
                        onChange={ this.onTextChange }
                        maxLength="280"
                        value={this.state.message}
                    >
                </textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-default float-right">
                    <i className="fa fa-twitter"></i>Tweet now
                </button>
            </form>
        );
    }
}

export default PostForm;