import axios from 'axios';
import {success, error} from 'redux-saga-requests';

import {SET_AUTH_HEADER, DELETE_AUTH_HEADER, USER_LOGIN, USER_SIGNUP, USER_LOGOUT} from './auth/auth-constants';
import {fetchUser} from './auth/auth-actions';

export const setAxiosDefaults = (store) => (next) => (action) => {
    switch (action.type) {
        case SET_AUTH_HEADER:
            console.log(action.payload.access_token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`;
            break;
        case DELETE_AUTH_HEADER:
            delete axios.defaults.headers.common['Authorization'];
            break;
        default:
            axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
            break;
    }
    return next(action)
};

export const authMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            localStorage.setItem('account', JSON.stringify({access_token: action.payload.data.access_token}));
            break;

        case USER_LOGOUT:
            localStorage.removeItem('account');
            break;

        default:
            break;
    }
    return next(action);
};