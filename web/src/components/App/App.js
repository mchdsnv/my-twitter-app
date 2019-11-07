import React from "react";

import AppHeader from "../AppHeader";
import PostForm from "../PostForm";
import Posts from "../Posts";
import uuid from "uuid";
import moment from "moment";
import avatar from '../user-profile-img.png';
import './App.css';

class App extends React.Component {

    constructor() {
        super();

        this.dateFromDatabase = 1572605803000;
        this.state = {
            posts: [
                { id: "2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'", avatar, fullname: 'Developer', message: 'First tweet', username: '@developer', time: moment(this.dateFromDatabase).fromNow() },
                { id: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6", avatar, fullname: 'Developer', message: 'Second tweet', username: '@developer', time: moment(this.dateFromDatabase).fromNow() },
                { id: "c6235813-3ba4-3801-ae84-e0a6ebb7d138", avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', time: moment(this.dateFromDatabase).fromNow()}
            ]
        };
    }

    addPost = (message) => {
        const date = new Date();
        const time = moment(date).fromNow();
        const id = uuid.v1();
        const post = {
            id,
            avatar,
            fullname: 'User',
            message,
            username: '@user',
            time
        };

        this.setState( ( { posts })=> {
            const resultArray = [
                ...posts,
                post
            ];

            return {
                posts: resultArray
            }
        } )
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

export default App;