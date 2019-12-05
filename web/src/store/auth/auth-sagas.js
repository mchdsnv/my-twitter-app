import { createRequestInstance, watchRequests, requestsReducer } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import axios from "axios";
import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, GET_USER} from "../twitter/twitter-actions";
import {call, put} from "redux-saga/effects";


export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
function* userLogin(action){
    yield put({
        type: SET_USER,
        payload: action.data.user,
    });

    yield put({
        type: SET_TOKEN,
        payload: action.data.token,
    });


    const {credentials} = action.payload;
    try {
        const response = yield call(axios.post,`auth/login`,
            {
                email: credentials.email,
                password: credentials.password
            }
        );
        // localStorage.setItem('access_token', response.data.access_token);
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

function* registrationRequestSuccess(action) {
    yield put({
        type: SET_USER,
        payload: action.data.user,
    });

    yield put({
        type: SET_TOKEN,
        payload: action.data.token,
    });
}

const userLogin = ({ email, password }) => ({
    type: USER_LOGIN,
    request: {
        url: '/login',
        method: 'POST',
        data: { email, password }
    }
});

const userLogout = ({token}) => ({
    type: USER_LOGOUT,
    request: {
        url: '/logout',
        method: 'post',
        data: { token }
    }
});

const signUp = ({name, email, password}) => ({
    type: USER_SIGNUP,
    request: {
        url: '/signup',
        method: 'post',
        data: { name, email, password }
    }
});

const getUser = () => ({
    type: USER_SIGNUP,
    request: {
        url: '/signup',
        method: 'post',
        data: { name, email, password }
    }
});

const postsReducer = requestsReducer({ actionType: FETCH_POSTS });

// function* fetchPosts(action) {
//     try {
//         const {data} = yield call(axios.get(`/posts/?page=${page}`));
//         yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//     } catch (e) {
//         yield put({type: "USER_FETCH_FAILED", message: e.message});
//     }
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* rootSaga() {
    yield createRequestInstance({ driver: createDriver(axios) });
    yield watchRequests();
}