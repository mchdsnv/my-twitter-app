import React from "react";
import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';

import 'antd/dist/antd.css';
import {Col, Layout, Row} from 'antd';

import './App.css';
import {fetchPosts} from '../store/twitter/twitter-actions';
import GlobalStyle from './GlobalStyle'
import NavigationMenu from './NavigationMenu';
import Navigation from './Navigation';

import {LOGIN_SUCCESS} from '../store/twitter/twitter-actions';

const { Header, Content } = Layout;

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
        const user = localStorage.getItem('user');
        if ( user ) {
            this.props.dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    authenticated: true,
                    token: user
                }
            });
        }
    }

    render() {
        return (
            <Layout>
                <GlobalStyle/>
                <Content>
                    <Row>
                        <Col span={12} offset={6}>
                            <Router>
                                <Header>
                                    <NavigationMenu/>
                                </Header>
                                <Navigation/>
                            </Router>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default connect()(App);