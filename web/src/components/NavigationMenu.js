import React from 'react'
import { Link } from 'react-router-dom'
import AuthButton from './AuthButton';

import {Menu} from 'antd';

const NavigationMenu = () => (
    <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
    >
        <Menu.Item key="2"><Link to="/feed">Feed</Link></Menu.Item>
        <Menu.Item key="1"><AuthButton /></Menu.Item>
    </Menu>
);

export default NavigationMenu;