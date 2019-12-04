import axios from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import {
    ADD_POST,
    DELETE_POST,
    FETCH_POSTS,
    UPDATE_POST,
    USER_LOGIN,
    USER_SIGNUP,
    GET_USER
} from "./twitter-actions";

export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
function* addPost(action) {
    const {content} = action.payload;
    try {
        console.log(content);
        const {data} = yield call(axios.post, `posts`, {content});
        yield put({
            type: ADD_POST_SUCCESS,
            payload: {
                post: {
                    id: data.id,
                    content: data.content,
                    created_at: data.created_at
                }
            }
        });
    } catch (error) {
        yield put({
            type: ADD_POST_FAILURE,
            error
        });
    }
}

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
function* fetchPosts(action) {
    try {
        const {data} = yield call(axios.get,`posts/?page=${action.payload.page}`);
        yield put({
            type: FETCH_POSTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        yield put({
            type: FETCH_POSTS_FAILURE,
            error
        })
    }
}

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
function* deletePost(action){
    const {deletedPost} = action.payload;
    try {
        yield call( axios.delete,`posts/${deletedPost.id}`);
        yield put({
            type: DELETE_POST_SUCCESS,
            payload: {
                post: deletedPost
            }
        });
    } catch (error) {
        yield put({
            type: DELETE_POST_FAILURE,
            error
        });
    }
}

export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
function* updatePost(action) {
    const {updatedPost, content} = action.payload;
    try {
        const response = yield call(axios.put,`posts/${updatedPost.id}`, {content});
        yield put({
            type: UPDATE_POST_SUCCESS,
            payload: {post: response.data, content}
        });
    } catch (error) {
        yield put({
            type: UPDATE_POST_FAILURE,
            error
        });
    }
}

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
function* userLogin(action){
    const {credentials} = action.payload;
    try {
        const response = yield call(axios.post,`auth/login`,
            {
                email: credentials.email,
                password: credentials.password
            }
        );
        localStorage.setItem('access_token', response.data.access_token);
        yield put({
            type: USER_LOGIN_SUCCESS,
            payload: {
                username: credentials.login,
                access_token: response.data.access_token
            }
        });
    } catch (error) {
        yield put({
            type: USER_LOGIN_FAILURE,
            error
        });
    }
}

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';
function* userSignup(action) {
    const {email, password, name} = action.payload;
    try {
        const response = yield call( axios.post,`auth/signup`, {email, password, name}
        );
        localStorage.setItem('access_token', response.data.access_token);
        yield put({
            type: USER_SIGNUP_SUCCESS,
            payload: {
                name,
                access_token: response.data.access_token}
        });
    } catch (error) {
        yield put({
            type: USER_SIGNUP_FAILURE,
            error
        });
    }
}

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
function* getUser() {
    try {
        const { data } = yield call( axios.post,`auth/user`);
        localStorage.setItem('user', data.id);
        yield put({
            type: GET_USER_SUCCESS ,
            payload: {
                name: data.name,
                user: data.id
            }
        });
    } catch (error) {
        yield put({
            type: GET_USER_FAILURE,
            error
        });
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(ADD_POST, addPost),
        yield takeEvery(FETCH_POSTS, fetchPosts),
        yield takeEvery(DELETE_POST, deletePost),
        yield takeEvery(UPDATE_POST, updatePost),
        yield takeEvery(USER_LOGIN, userLogin),
        yield takeEvery(USER_SIGNUP, userSignup),
        yield takeEvery(GET_USER, getUser)
    ])
}