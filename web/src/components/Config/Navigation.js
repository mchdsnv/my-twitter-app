import React from 'react'
import { Link } from 'react-router-dom'

import {Icon, Menu} from "antd";
const { SubMenu } = Menu;

const Navigation = () => (
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
    >
        <SubMenu
            key="sub1"
            title={
                <span>
                    <Icon type="user" />
                    Pages
                </span>
            }
        >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/settings">Settings</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/feed">Feed</Link></Menu.Item>
        </SubMenu>
        <SubMenu
            key="sub2"
            title={
                <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }
        >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu
            key="sub3"
            title={
                <span>
                <Icon type="notification" />
                subnav 3
              </span>
            }
        >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
    </Menu>
);

export default Navigation;