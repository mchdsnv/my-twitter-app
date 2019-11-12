import React from "react";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col, Avatar, Button } from 'antd';

function Post(post) {
    const { id, avatar, fullname, username, time, message, onDelete } = post;

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

    const Time = styled.i`
        color: #657786;
    `;

    return(
        <Row>
            <Col
                xs={24}
                sm={20}
                md={4}
                lg={4}
                xl={2}
            >
                <Avatar size={64} src={avatar} alt="avatar" />
            </Col>
            <Col
                xs={24}
                sm={20}
                md={20}
                lg={20}
                xl={22}
            >
                <Row>
                    <input name ="id" type="hidden" value={id} />
                    <FullName>{fullname}</FullName>
                    <UserName>{username}</UserName>
                    <Time>{time}</Time>
                </Row>
                <Row>
                <Message>{message}</Message>
                <Button
                    onClick={onDelete}
                    icon="delete"
                    type="danger"
                    ghost="true"
                >
                </Button>
                </Row>
            </Col>
        </Row>
    );
}

export default Post;