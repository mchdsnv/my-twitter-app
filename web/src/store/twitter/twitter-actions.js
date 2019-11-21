import uuid from "uuid";
import moment from "moment";

export const  ADD_POST = 'ADD_POST';
export const  DELETE_POST = 'DELETE_POST';
export const  FETCH_POSTS = 'FETCH_POSTS';
export const  UPDATE_COUNTER = 'UPDATE_COUNTER';

export const addPost = (message) => ({
    type: ADD_POST,
    payload: {
        post: {
            id: uuid.v1(),
            avatar: require("../../components/avatar.png"),
            fullname: 'User',
            message,
            username: '@user',
            created_at: moment(new Date()).fromNow()
        }
    }
});

export const delPost = (deletedPost) => ({
    type: DELETE_POST,
    payload: {
        post: deletedPost
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

export const updCounter = (counter) => ({
    type: UPDATE_COUNTER,
    payload: {
        counter: counter
    }
});