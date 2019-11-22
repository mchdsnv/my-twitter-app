import React from "react";
import {Col, Row} from "antd";
import Posts from "../Posts";
import AddPostForm from "../AddPostForm";

const Feed = () => (
    <Row>
        <Col>
            <Posts />
            <AddPostForm />
        </Col>
    </Row>
);

export default Feed;