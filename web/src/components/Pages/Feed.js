import React from 'react';
import Posts from '../Posts';
import AddPostForm from '../AddPostForm';
import * as actions from '../../store/twitter/twitter-actions';
import {connect} from 'react-redux';

class Feed extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
        const user = localStorage.getItem('user');
        if (!user) {
            this.props.getUser();
        }
    }

    render () {
        return (
            <>
                <AddPostForm/>
                <Posts/>
            </>
        );
    }
}

export default connect(null, actions)(Feed);