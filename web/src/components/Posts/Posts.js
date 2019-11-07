import React from "react";

import Post from "../Post";
import "./Posts.css";

function Posts({posts, onDelete}) {
    const elements = posts.map((post) => {
        console.log(post);
        return(
            <li className="list-group-item" key={post.id}>
                <Post
                    {...post}
                    onDelete = { () => onDelete(post.id) }
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

export default Posts;