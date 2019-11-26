import React from "react";
import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';

import 'antd/dist/antd.css';
import {Col, Layout, Menu, Row} from 'antd';

import './App.css';
import {fetchPosts} from '../store/twitter/twitter-actions';
import GlobalStyle from './GlobalStyle'
import NavigationMenu from './NavigationMenu';
import Navigation from './Navigation';

const { Header, Content, Sider } = Layout;

class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    render() {
        return (
            <Router>
                <Layout>
                    <GlobalStyle/>
                    <Content>
                        <Row>
                            <Col span={12} offset={6}>
                                <Header>
                                    <NavigationMenu/>
                                </Header>
                                <Navigation/>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Router>
        );
    }
}

export default connect()(App);