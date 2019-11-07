import React from "react";

import Header from "../Header";
import PostForm from "../PostForm";
import Posts from "../Posts";

import uuid from "uuid";
import moment from "moment";
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #e6ecf0;
    }
`;

const Wrapper = styled.div`
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    `;

class App extends React.Component {

    constructor() {
        super();

        this.dateFromDatabase = 1572605803000;
        this.avatar = require("../avatar.png");
        this.state = {
            posts: [
                { id: "2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'", avatar: this.avatar, fullname: 'Developer', message: 'First tweet', username: '@developer', time: moment(this.dateFromDatabase).fromNow() },
                { id: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6", avatar: this.avatar, fullname: 'Developer', message: 'Second tweet', username: '@developer', time: moment(this.dateFromDatabase).fromNow() },
                { id: "c6235813-3ba4-3801-ae84-e0a6ebb7d138", avatar: this.avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', time: moment(this.dateFromDatabase).fromNow()}
            ]
        };
    }

    addPost = (message) => {
        const   date = new Date(),
                time = moment(date).fromNow(),
                id = uuid.v1(),
                avatar = require("../avatar.png"),
                post = {
                    id,
                    avatar,
                    fullname: 'User',
                    message,
                    username: '@user',
                    time
                };

        this.setState( ( { posts })=> {
            if( message ) {
                const resultArray = [
                    ...posts,
                    post
                ];

                return {
                    posts: resultArray
                }
            } else {
                return false;
            }
        })
    };

    deletePost= (id) => {
        this.setState( ( { posts } )=> {
            const postId = posts.findIndex( (post) => post.id === id );

            const before = posts.slice( 0, postId );
            const after = posts.slice(postId+1);

            const resultArray = [ ...before, ...after ];
            return {
                posts: resultArray
            };
        } )
    };

    render() {
        return(
            <Wrapper>
                <GlobalStyle />
                <Header />
                <Posts
                    props={this.state.posts}
                    onDelete = { this.deletePost}
                />
                <PostForm
                    onAdd = { this.addPost }
                />
            </Wrapper>
        );
    }
}

export default App;