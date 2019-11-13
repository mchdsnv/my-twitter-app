import React from "react";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col, Avatar, Button } from 'antd';

const FullName = styled.span`
        font-weight: bold;
`;

const UserName = styled.span`
        margin: 0 5px;
        color: #657786;
`;

const Message = styled.p` 
        white-space: pre-wrap;
`;

const Date = styled.i`
        color: #657786;
`;

const Post = (post) => (
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
                <Message>{post.message}</Message>
                <Button
                    onClick={post.postDelete}
                    icon="delete"
                    type="danger"
                    ghost="true"
                >
                </Button>
            </Row>
        </Col>
    </Row>
);

export default Post;