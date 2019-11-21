import React from "react";

import {connect} from 'react-redux';
import {fetchPosts} from '../store/twitter/twitter-actions';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import GlobalStyle from './GlobalStyle'
import PostForm from "./PostForm";
import Posts from "./Posts";
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';
const { Header, Footer, Content } = Layout;



class App extends React.Component {

    componentDidMount() {
        console.log('componentDidMount');
        this.props.dispatch(fetchPosts());
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <Router>
                <Layout>
                    <GlobalStyle/>
                    <Header><h1>My Twitter-like app</h1></Header>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route path="/feed" component={FeedPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/logout" component={LogoutPage}/>
                    <Route path="/registration" component={SignUpPage}/>
                    <Content>
                        <Row>
                            <Col
                                xs={24}
                                sm={{span: 20, offset: 2}}
                                md={{span: 20, offset: 2}}
                                lg={{span: 12, offset: 6}}
                            >
                                <Posts />
                                <PostForm />
                            </Col>
                        </Row>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Router>
        );
    }

}

export default connect()(App);