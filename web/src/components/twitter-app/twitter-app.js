import React, {Component} from "react";

import AppHeader from "../app-header";
import PostForm from "../post-form";
import PostList from "../post-list";
import avatar from '../user-profile-img.png';
import './twitter-app.css';

export default class TwitterApp extends Component {

    maxId = 100;

    state = {
        postData: [
            { id: "1", avatar: avatar, fullname: 'Developer', message: 'First tweet', username: '@developer', time: '5 min ago' },
            { id: "2", avatar: avatar, fullname: 'Developer', message: 'Second tweet', username: '@developer', time: '15 min ago' },
            { id: "3", avatar: avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', time: '25 min ago' },
            { id: "4", avatar: avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', time: '3 hours ago' }
        ]
    }

    addItem = (text, time) => {
        const newPostData = {
            id: this.maxId++,
            avatar: avatar,
            fullname: 'User',
            message: text,
            username: '@user',
            time: 'just now'
        }

        this.setState( ( { postData })=> {
            const resultArray = [
                ...postData,
                newPostData
            ];

            return {
                postData: resultArray
            }
        } )
    }

    deleteItem = (id) => {
        this.setState( ( { postData } )=> {
            const postId = postData.findIndex( (el) => el.id === id );

            const before = postData.slice( 0, postId );
            const after = postData.slice(postId+1);

            const resultArray = [ ...before, ...after ];
            return {
                postData: resultArray
            };
        } )
    }

    render() {
        return(
            <div className="container">
                <AppHeader />
                <PostList
                    tweet={this.state.postData}
                    onDeleted = { this.deleteItem }
                />
                <PostForm
                    onAdded = { this.addItem }
                />
            </div>
        );
    }
}