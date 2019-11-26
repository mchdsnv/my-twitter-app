import axios from 'axios';

export const  EDIT_POST = 'EDIT_POST';
export const  UPDATE_COUNTER = 'UPDATE_COUNTER';

export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/posts';

export const addPost = (content) => {
    return async dispatch => {

        function onSuccess(data) {
             dispatch({
                type: ADD_POST_SUCCESS,
                payload : {
                    post: {
                        id: data.id,
                        content: data.content,
                        created_at: data.created_at
                    }
                }
            });
        }

        function onError(error) {
            dispatch({ type: ADD_POST_FAILURE, error });
        }

        try {
            const response = await axios.post(`/`, { content } );
            const { data } = response;
            return onSuccess(data);

        } catch (error) {
            return onError(error);
        }

    };
};

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = (page = 1) => {
    return async dispatch => {

        function onSuccess(data) {
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: { posts: data }});
        }

        function onError(error) {
            dispatch({ type: FETCH_POSTS_FAILURE, error });
        }

        try {
            const response = await axios.get(`/?page=${page}` );
            const { data } = response.data;
            return onSuccess(data);

        } catch (error) {
            return onError(error);
        }

    };
};

export const editPost = (updatedPost) => ({
    type: EDIT_POST,
    payload: {
        post: updatedPost
    }
});

export const UPDATE_POST = 'UPDATE_POST ';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const updatePost = (updatedPost, content) => {
    return async dispatch => {

        function onSuccess(data) {
            dispatch({
                type: UPDATE_POST_SUCCESS,
                payload: {
                    post: data,
                    content
                }
            });
        }

        function onError(error) {
            dispatch({ type: UPDATE_POST_FAILURE, error });
        }

        try {
            const response = await axios.put(`/${updatedPost.id}`,{ content }  );
            const { data } = response;
            console.log(data);
            return onSuccess(data);

        } catch (error) {
            return onError(error);
        }

    }
};

export const DELETE_POST = 'DELETE_POST ';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const deletePost = (deletedPost) => {
    return async dispatch => {

        function onSuccess(data) {
            dispatch({
                type: DELETE_POST_SUCCESS,
                payload: {
                    post: deletedPost
                }
            });
        }

        function onError(error) {
            dispatch({ type: DELETE_POST_FAILURE, error });
        }

        try {
            const response = await axios.delete(`/${deletedPost.id}` );
            const { data } = response;
            console.log(response);
            return onSuccess(data);

        } catch (error) {
            return onError(error);
        }

    }
};

export const updCounter = (counter) => ({
    type: UPDATE_COUNTER,
    payload: {
        counter: counter
    }
});