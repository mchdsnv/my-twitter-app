import React from "react";

import PostForm from "./PostForm";
import Posts from "./Posts";
import './App.css';

import uuid from "uuid";
import moment from "moment";
import GlobalStyle from './GlobalStyle'
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends React.Component {

    constructor(props) {
        super(props);

        this.avatar = require("./avatar.png");
        this.state = {
            posts: [
                { id: "2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d", avatar: this.avatar, fullname: 'Developer', message: 'First tweet', username: '@developer', time: moment(1572605803000).fromNow() },
                { id: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6", avatar: this.avatar, fullname: 'Developer', message: 'Second tweet', username: '@developer', time: moment(1572605803000).fromNow() },
                { id: "c6235813-3ba4-3801-ae84-e0a6ebb7d138", avatar: this.avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', time: moment(1572605803000).fromNow()}
            ]
        };
    }

    addPost = (message) => {
        const post = {
            id: uuid.v1(),
            avatar: require("./avatar.png"),
            fullname: 'User',
            message,
            username: '@user',
            time: moment(new Date()).fromNow()
        };

        const posts = [ ...this.state.posts, post ];
        this.setState( { posts });
    };

    deletePost = (post) => {
        this.setState( (state)=> {
            const posts = [...state.posts],
                deletedPostId = posts.findIndex( (deletedPost) => deletedPost.id === post.id );
                posts.splice(deletedPostId, 1);
            return { posts };
        })
    };

    render() {
        return(
            <Layout>
                <GlobalStyle />
                <Header><h1>My Twitter-like app</h1></Header>
                <Content>
                    <Row>
                        <Col
                            xs={24}
                            sm={{ span: 20, offset: 2 }}
                            md={{ span: 20, offset: 2 }}
                            lg={{ span: 12, offset: 6 }}
                        >
                            <Posts
                                props = {this.state.posts}
                                onDelete = { this.deletePost}
                            />
                            <PostForm onAdd = { this.addPost } />
                        </Col>
                    </Row>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default App;