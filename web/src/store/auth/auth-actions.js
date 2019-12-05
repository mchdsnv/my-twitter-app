import { createRequestInstance, watchRequests, requestsReducer } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, GET_USER} from "../twitter/twitter-actions";

export const userLogin = () => ({
    type: USER_LOGIN,
    payload: {
        request: {
            url: `http://127.0.0.1:8000/api/auth/login`,
            method: 'POST',
            data
        }
    },
});

export const userSignup = (data) => ({
    type: SIGNUP,
    payload: {
        request: {
            url: `http://127.0.0.1:8000/api/auth/signup`,
            method: 'POST',
            data
        }
    },
});

export const userLogout = (data) => ({
    type: LOGOUT,
    payload: {
        request: {
            url: `http://127.0.0.1:8000/api/auth/logout`,
            method: 'POST',
            data
        }
    },
});