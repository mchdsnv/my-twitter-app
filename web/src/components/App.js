import React, {useState, useEffect} from "react";

import GlobalStyle from './GlobalStyle'
import PostForm from "./PostForm";
import Posts from "./Posts";
import './App.css';

import uuid from "uuid";
import moment from "moment";

import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const response = JSON.parse(localStorage.getItem('posts')) ;
        if (response) {
            setPosts(response);
        }
    }, []);

    // Posts update hook
    useEffect(() => localStorage.setItem('posts', JSON.stringify(posts)), [posts]);

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