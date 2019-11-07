import React from "react";

import AppHeader from "../app-header";
import PostForm from "../post-form";
import Posts from "../posts";
import avatar from '../user-profile-img.png';
import './App.css';

export default class App extends React.Component {

    state = {
        posts: [
            { id: 1, avatar, fullname: 'Developer', message: 'First tweet', username: '@developer', time: '5 min ago' },
            { id: 2, avatar, fullname: 'Developer', message: 'Second tweet', username: '@developer', time: '15 min ago' },
            { id: 3, avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', time: '25 min ago' },
            { id: 4, avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', time: '3 hours ago' }
        ]
    }

    addPost = (text) => {
        const postId = require('uuid/v4');

        const id = postId();

        const post = {
            id,
            avatar,
            fullname: 'User',
            message: text,
            username: '@user',
            time: 'just now'
        }

        console.log( id );

        this.setState( ( { posts })=> {
            const resultArray = [
                ...posts,
                post
            ];

            return {
                posts: resultArray
            }
        } )
    }

    deletePost= (id) => {
        this.setState( ( { posts } )=> {
            const postId = posts.findIndex( (el) => el.id === id );

            const before = posts.slice( 0, postId );
            const after = posts.slice(postId+1);

            const resultArray = [ ...before, ...after ];
            return {
                posts: resultArray
            };
        } )
    }

    render() {
        return(
            <div className="container">
                <AppHeader />
                <Posts
                    posts={this.state.posts}
                    onDelete = { this.deletePost}
                />
                <PostForm
                    onAdd = { this.addPost }
                />
            </div>
        );
    }
}