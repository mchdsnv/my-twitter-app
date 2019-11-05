import React from "react";

const TweetItem = ( { fullname, username, time, message }) => {
    return(
        <div>
            <span>{ fullname }</span>
            <span>{ username }</span>
            <small>{ time }</small>
            <div>{ message }</div>
        </div>
    );
};

export default TweetItem;