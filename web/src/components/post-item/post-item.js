import React, { Component } from "react";

export default class TweetItem extends Component {

    render() {
        const { fullname, username, time, message, onDeleted } = this.props;
        return(
            <div>
                <span>{ fullname }</span>
                <span>{ username }</span>
                <small>{ time }</small>
                <div>{ message }</div>
                <a onClick={ onDeleted }>Delete tweet</a>
            </div>
        );
    }
}