import React from "react";

import "./post-item.css";

function TweetItem( props ) {
    const { avatar, fullname, username, time, message, onDeleted } = props;
    return(
        <div  className="twitter-post container" >
            <div className="row">
                <div className="column">
                    <img width="50px"
                         height="50px"
                         className="rounded-circle"
                         src={avatar}
                         alt="avatar"
                    />
                </div>
                <div className="column">
                    <strong className="font-weight-bold">{ fullname }</strong>
                    <span className="font-italic">{ username }</span>
                    <span>{ time }</span>
                    <div>{ message }</div>
                    <a href="/#" onClick={ onDeleted }>Delete</a>
                </div>
            </div>
        </div>
    );
}

export default TweetItem;