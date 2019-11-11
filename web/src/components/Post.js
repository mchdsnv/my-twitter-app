import React from "react";
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import 'antd/dist/antd.css';
import { Comment, Icon, Tooltip, Row, Col, Avatar  } from 'antd';
import moment from "moment";

function Post(post) {
    const { id, avatar, fullname, username, time, message, onDelete } = post;

    const FullName = styled.span`
    `;

    const UserName = styled.span`
    `;

    const Message = styled.div`
    `;

    const Time = styled.span`
    `;

    const ButtonTrash = styled.button`
        padding: 5px 0;
        border: none;
        background: transparent;
        cursor: pointer;
    :focus {
        outline: none;
    }
    > svg {
        color: #ff6347;
        margin: 5px 0;
        font-size: 20px;
    }
    `;

    return(
        <Row>
            <Col span={2}>
                <Avatar size={64} icon="user" />
            </Col>
            <Col span={22}>
                <Row>
                    <input name ="id" type="hidden" value={id} />
                    <FullName>{fullname}</FullName>
                    <UserName>{username}</UserName>
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                </Row>
                <Row>
                <Message>{message}</Message>
                <ButtonTrash onClick={onDelete}>
                    <FaTrashAlt />
                </ButtonTrash>
                </Row>
            </Col>
        </Row>
    );

    // return (
    //     <Comment
    //         author={<a>{fullname}</a>}
    //         avatar={
    //             <Avatar
    //                 size={64}
    //                 icon="user"
    //                 alt="user"
    //             />
    //         }
    //         content={message}
    //         datetime={
    //             <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
    //                 <span>{moment().fromNow()}</span>
    //             </Tooltip>
    //         }
    //     />
    // );
}

export default Post;