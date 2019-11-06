import React from "react";

import TweetItem from "../post-item/post-item";
import "./post-list.css";

const PostList = ({tweet, onDeleted} ) => {
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
            {elements}
        </ul>
    );
};

export default PostList;