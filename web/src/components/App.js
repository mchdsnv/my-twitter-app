import React from "react";

import {connect} from 'react-redux';
import {fetchPosts} from '../store/twitter/twitter-actions';

import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './GlobalStyle'
import './App.css';

import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';

import Navigation from "./Config/Navigation";
import Home from "./Pages/Home";
import Feed from "./Pages/Feed";
import Settings from "./Pages/Settings";
import Notfound from "./Pages/Notfound";

const { Header, Footer, Content, Sider } = Layout;

class App extends React.Component {

    componentDidMount() {
        console.log('componentDidMount');
        this.props.dispatch(fetchPosts());
    }

    render() {
        return (
            <Router>
                <Layout>
                    <GlobalStyle/>
                    <Sider>
                        <Navigation />
                    </Sider>
                    <Layout>
                        <Content>
                            <Header className="header">
                                <div className="logo" />
                                <Menu
                                    mode="horizontal"
                                    defaultSelectedKeys={['2']}
                                >
                                </Menu>
                            </Header>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/feed" component={Feed} />
                                <Route path="/settings" component={Settings} />
                                <Route component={Notfound} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
                <Footer>Footer</Footer>
            </Router>

        );
    }
}

export default connect()(App);