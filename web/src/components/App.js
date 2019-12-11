import React from "react";
import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';

import 'antd/dist/antd.css';
import {Col, Layout, Row} from 'antd';

import './App.css';
import GlobalStyle from './GlobalStyle'
import NavigationMenu from './NavigationMenu';
import Navigation from './Navigation';

import * as appActions from '../store/auth/auth-actions';

const {Header, Content} = Layout;

class App extends React.Component {

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

export default connect(null, appActions)(App);