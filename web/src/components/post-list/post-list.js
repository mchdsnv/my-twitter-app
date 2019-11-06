import React from "react";

import TweetItem from "../post-item/post-item";
import "./post-list.css";

function PostList({tweet, onDeleted}) {
    const elements = tweet.map( ( item ) => {

        const {id, ...itemProps} = item;

        return(
            <li className="list-group-item" key={id}>
                <TweetItem
                    { ...itemProps}
                    onDeleted = { () => onDeleted(id) }
                />
            </li>
        );
    });

    return(
        <ul className="list-group post-item">
            <strong className="list-group-item">Tweets</strong>
            {elements}
        </ul>
    );
}

export default PostList;