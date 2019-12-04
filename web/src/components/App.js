import React from "react";
import {BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';

import 'antd/dist/antd.css';
import {Col, Layout, Row} from 'antd';

import './App.css';
import GlobalStyle from './GlobalStyle'
import NavigationMenu from './NavigationMenu';
import Navigation from './Navigation';

import {USER_LOGIN_SUCCESS} from '../store/twitter/sagas';

const {Header, Content} = Layout;

class App extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem('access_token');
        if ( token ) {
            this.props.dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    authenticated: true,
                    token: token
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