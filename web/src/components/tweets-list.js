import React from "react";

import TweetItem from "./tweet-item";
import "./tweets-list.css";

const TweetsList = ( {tweet} ) => {
    const elements = tweet.map( ( item ) => {

        const {id, ...itemProps} = item;

        return(
            <li className="list-group-item" key={item.id}>
                <TweetItem { ...itemProps} />
            </li>
        );
    });

    return(
        <ul className="list-group twitter-items">
            {elements}
        </ul>
    );
};

export default TweetsList;