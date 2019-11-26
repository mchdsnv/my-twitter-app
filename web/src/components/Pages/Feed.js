import React from "react";
import Posts from "../Posts";
import AddPostForm from "../AddPostForm";

const Feed = () => (
    <div>
        <AddPostForm/>
        <Posts/>
    </div>
);

export default Feed;