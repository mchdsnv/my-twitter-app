import axios from 'axios';

export const  EDIT_POST = 'EDIT_POST';
export const  UPDATE_COUNTER = 'UPDATE_COUNTER';

export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

export const addPost = (content) => (
    async dispatch => {
        try {
            const response = await axios.post(`/posts/`, { content } );
            const { data } = response;
            dispatch({
                type: ADD_POST_SUCCESS,
                payload : {
                    post: {
                        id: data.id,
                        content: data.content,
                        created_at: data.created_at,
                        user_id: 1
                    }
                }
            });
        } catch (error) {
            dispatch({ type: ADD_POST_FAILURE, error });
        }
    }
);

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = (page = 1) => (
    async (dispatch) => {
        try {
            const response = await axios.get(`/posts/?page=${page}`);
            const {data} = response.data;
            dispatch({type: FETCH_POSTS_SUCCESS, payload: {posts: data}});

        } catch (error) {
            dispatch({type: FETCH_POSTS_FAILURE, error});
        }
    }
);

export const editPost = (updatedPost) => ({
    type: EDIT_POST,
    payload: {
        post: updatedPost
    }
});

export const UPDATE_POST = 'UPDATE_POST ';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const updatePost = (updatedPost, content) => (
    async dispatch => {
        try {
            const response = await axios.put(`/posts/${updatedPost.id}`,{ content }  );
            const { data } = response;

            dispatch({
                type: UPDATE_POST_SUCCESS,
                payload: {
                    post: data,
                    content
                }
            });

        } catch (error) {
            dispatch({ type: UPDATE_POST_FAILURE, error });
        }
    }
);

export const DELETE_POST = 'DELETE_POST ';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const deletePost = (deletedPost) => (
    async dispatch => {
        try {
            const response = await axios.delete(`/posts/${deletedPost.id}` );
            const { data } = response;

            dispatch({
                type: DELETE_POST_SUCCESS,
                payload: {
                    post: deletedPost
                }
            });

        } catch (error) {
            dispatch({ type: DELETE_POST_FAILURE, error });
        }
    }
);

export const updCounter = (counter) => ({
    type: UPDATE_COUNTER,
    payload: {
        counter: counter
    }
});

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const userLogin = ({email, password}) => (
    async dispatch => {
        try {
            const response = await axios.post(`auth/login`,{ email, password }  );
            const { data } = response;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    authenticated: true,
                    token: data.access_token
                }
            });
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: {
                    authenticated: false,
                },
                error
            });
        }
    }
);

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const userLogout = () => (
    async dispatch => {
        try {
            const response = await axios.post(`auth/logout`,{ token: localStorage.getItem('access_token')} );
            localStorage.clear();
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: {
                    authenticated: false
                }
            });
        } catch (error) {
            dispatch({
                type: LOGOUT_FAILURE,
                payload: {
                    authenticated: false,
                },
                error
            });
        }
    }
);

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const userSignup = ({name, email, password}) => (
    async dispatch => {
        try {
            const response = await axios.post(`auth/signup`,{ name, email, password }  );
            dispatch({ type: SIGNUP_SUCCESS });
        } catch(error) {
            dispatch({ type: SIGNUP_FAILURE, error })
        }
    }
);