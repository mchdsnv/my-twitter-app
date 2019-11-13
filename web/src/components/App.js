import React, {useState} from "react";

import GlobalStyle from './GlobalStyle'
import PostForm from "./PostForm";
import Posts from "./Posts";
import './App.css';

import uuid from "uuid";
import moment from "moment";

import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;
const avatar = require("./avatar.png");

const App = () => {
    const databasePosts = [
            {id: "2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d", avatar, fullname: 'Developer', message: 'First tweet', username: '@developer', created_at: moment(1572605803000).fromNow()},
            {id: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6", avatar, fullname: 'Developer', message: 'Second tweet', username: '@developer', created_at: moment(1572605803000).fromNow()},
            {id: "c6235813-3ba4-3801-ae84-e0a6ebb7d138", avatar, fullname: 'Developer', message: 'Third tweet', username: '@developer', created_at: moment(1572605803000).fromNow()}
    ];

    const [posts, setPosts] = useState(databasePosts);

    const addPost = (message) => {
        setPosts( [
            ...posts,
            {
                id: uuid.v1(),
                avatar: require("./avatar.png"),
                fullname: 'User',
                message,
                username: '@user',
                created_at: moment(new Date()).fromNow()
            }] );
    };

    const deletePost = (deletedPost) => {
        setPosts(posts.filter( post => post.id !== deletedPost.id ));
    };

    return (
        <Layout>
            <GlobalStyle/>
            <Header><h1>My Twitter-like app</h1></Header>
            <Content>
                <Row>
                    <Col
                        xs={24}
                        sm={{span: 20, offset: 2}}
                        md={{span: 20, offset: 2}}
                        lg={{span: 12, offset: 6}}
                    >
                        <Posts
                            posts={posts}
                            onDelete={deletePost}
                        />
                        <PostForm onAdd={addPost}/>
                    </Col>
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default App;