import TwitterHeader from "../twitter-header";
import TweetForm from "../twitter-form";
import TweetsList from "../tweets-list";
import React from "react";

const TweetData = [
    { id: "1", fullname: 'Developer', message: 'First tweet', username: '@developer', time: '5 min ago' },
    { id: "2", fullname: 'Developer', message: 'Second tweet', username: '@developer', time: '15 min ago' },
    { id: "3", fullname: 'Developer', message: 'Third tweet', username: '@developer', time: '25 min ago' },
];

const TwitterApp = () => {
    return(
        <div className="container">
            <TwitterHeader />
            <TweetForm />
            <TweetsList tweet={TweetData } />
        </div>
    );
};

export default TwitterApp;