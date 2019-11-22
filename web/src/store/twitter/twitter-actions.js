import uuid from "uuid";
import moment from "moment";

export const  ADD_POST = 'ADD_POST';
export const  FETCH_POSTS = 'FETCH_POSTS';
export const  EDIT_POST = 'EDIT_POST';
export const  UPDATE_POST = 'UPDATE_POST';
export const  DELETE_POST = 'DELETE_POST';
export const  UPDATE_COUNTER = 'UPDATE_COUNTER';

export const addPost = (content) => ({
    type: ADD_POST,
    payload: {
        post: {
            id: uuid.v1(),
            avatar: require("../../components/avatar.png"),
            fullname: 'User',
            content,
            username: '@user',
            created_at: moment(new Date()).fromNow()
        }
    }
});

export const fetchPosts = () => {
    const response =  JSON.parse(localStorage.getItem('posts'));
    const posts = response ? response : [];
    return {
        type: FETCH_POSTS,
        payload : {posts}
    }
};

export const editPost = (updatedPost) => ({
    type: EDIT_POST,
    payload: {
        post: updatedPost
    }
});

export const updatePost = (updatedPost, content) => ({
    type: UPDATE_POST,
    payload: {
        post: updatedPost,
        content
    }
});

export const delPost = (deletedPost) => ({
    type: DELETE_POST,
    payload: {
        post: deletedPost
    }
});

export const updCounter = (counter) => ({
    type: UPDATE_COUNTER,
    payload: {
        counter: counter
    }
});