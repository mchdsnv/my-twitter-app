import React from "react";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col, Avatar, Button } from 'antd';
import {connect} from 'react-redux';
import * as actions from '../store/twitter/twitter-actions';

const FullName = styled.span`
        font-weight: bold;
`;

const UserName = styled.span`
        margin: 0 5px;
        color: #657786;
`;

const Content = styled.p` 
        white-space: pre-wrap;
`;

const Date = styled.i`
        color: #657786;
`;

const Post = ({post, editPost, deletePost}) => (
    <Row>
        <Col
            xs={24}
            sm={20}
            md={4}
            lg={4}
            xl={2}
        >
            <Avatar
                size={64}
                src={post.avatar}
                alt="avatar"
            />
        </Col>
        <Col
            xs={24}
            sm={20}
            md={20}
            lg={20}
            xl={22}
        >
            <Row>
                <input
                    name="id"
                    type="hidden"
                    value={post.id}
                />
                <FullName>{post.fullname}</FullName>
                <UserName>{post.username}</UserName>
                <Date>{post.created_at}</Date>
            </Row>
            <Row>
                <Content>{post.content}</Content>
                <Button
                    onClick={()=>editPost(post)}
                    icon="edit"
                    type="primary"
                    ghost="true"
                >
                </Button>
                <Button
                    onClick={()=>deletePost(post)}
                    icon="delete"
                    type="danger"
                    ghost="true"
                >
                </Button>
            </Row>
        </Col>
    </Row>
);

export default connect(null, actions)(Post);