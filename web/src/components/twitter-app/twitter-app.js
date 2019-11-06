import React, {Component} from "react";

import AppHeader from "../app-header";
import PostForm from "../post-form";
import PostList from "../post-list";

const PostData = [
    { id: "1", fullname: 'Developer', message: 'First tweet', username: '@developer', time: '5 min ago' },
    { id: "2", fullname: 'Developer', message: 'Second tweet', username: '@developer', time: '15 min ago' },
    { id: "3", fullname: 'Developer', message: 'Third tweet', username: '@developer', time: '25 min ago' },
    { id: "4", fullname: 'Developer', message: 'Third tweet', username: '@developer', time: '125 min ago' }
];

export default class TwitterApp extends Component {
    render() {
        return(
            <div className="container">
                <AppHeader />
                <PostList
                    tweet={PostData}
                    onDeleted = { (id)=> console.log(id)  }
                />
                <PostForm />
            </div>
        );
    }
}