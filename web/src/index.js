import React from 'react';
import ReactDOM from 'react-dom';

import TwitterHeader from "./components/twitter-header";
import TweetForm from "./components/twitter-form";
import TweetsList from "./components/tweets-list";
import TweetItem from "./components/tweet-item";

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

ReactDOM.render(<TwitterApp />,
    document.getElementById('root') );