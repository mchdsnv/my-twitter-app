import React from "react";

import "./twitter-form.css";

const TweetForm = () => {
    const TweetText = 'You can write Tweets up to 280 characters here.';
    return(
        <form className="tweet-form form-group" action="">
            <span>1488</span>
            <label htmlFor="">What do you want for share?</label>
            <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder={TweetText} maxlength="280"></textarea>
            <button type="submit" className="btn btn-default float-right"><i className="fa fa-twitter"></i> Tweet now</button>
        </form>
    );
};

export default TweetForm;