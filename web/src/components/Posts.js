import React from "react";
import Post from "./Post";
import styled from "styled-components";

const PostsList = styled.ul`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
`;

const PostsTitle = styled.span`
    display: inline-block;
    padding: 5px;
    border: 1px solid rgba(0,0,0,.125);
    border-bottom: 0;
    background-color: #fff;
    font-weight: bold;
    text-align: center
    + strong {
        display: inline-block;
        padding: 5px;
        border: 1px solid rgba(0,0,0,.125);
        border-bottom: 0;
        background-color: #fff;
        font-weight: bold;
        text-align: center;
        font-size: 16px;
    }
`;

const PostItem = styled.li`
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    word-break: break-all;
`;

const Posts = ({posts, onDelete}) => (
    <PostsList>
        <PostsTitle>Tweets</PostsTitle>
        { posts.map((post) => {
            return(
                <PostItem key={post.id}>
                    <Post
                        {...post}
                        postDelete = { () => onDelete(post) }
                    />
                </PostItem>
            );
        })
        }
    </PostsList>
);

export default Posts;