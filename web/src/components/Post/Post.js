import React from "react";
import styled from 'styled-components';
import "./Post.css";

function Post( props ) {
    const { id, avatar, fullname, username, time, message, onDelete } = props;

    const Avatar = styled.img`
        width: 50px;
        height: 50px;
        border: 0px solid transparent;
        border-radius: 25px;
    `;

    const Row = styled.div`
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    `;

    const Column = styled.div`
        padding: 5px;
    > span {
        margin: 0 5px;
        color: #657786;
    }
    `;

    const Button = styled.button`
        padding: 5px 0;
        border: none;
        background: transparent;
    > i {
        color: #ff6347;
        margin: 5px 0;
        font-size: 20px;
    }
    `;

    return(
        <Row>
            <Column>
                <Avatar src={avatar} alt="avatar" />
            </Column>
            <Column>
                <input name ="id" type="hidden" value={id} />
                <strong>{fullname}</strong>
                <span>{username}</span>
                <span>{time}</span>
                <div>{message}</div>
                <Button onClick={onDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </Button>
            </Column>
        </Row>
    );
}

export default Post;