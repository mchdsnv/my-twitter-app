import React from "react";

import PostForm from "./PostForm";
import Posts from "./Posts";
import './App.css';

import uuid from "uuid";
import moment from "moment";
import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

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

class App extends React.Component {

    constructor(props) {
        super(props);

        /* posts from DB */
        this.dateFromDatabase = 1572605803000;
        this.avatar = require("./avatar.png");
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
                avatar = require("./avatar.png"),
                post = {
                    id,
                    avatar,
                    fullname: 'User',
                    message,
                    username: '@user',
                    time
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