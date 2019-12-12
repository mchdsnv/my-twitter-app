import axios from 'axios';
import {success} from 'redux-saga-requests';
import {fetchUser} from './auth/auth-actions';

import {
    USER_LOGIN,
    USER_SIGNUP,
    USER_LOGOUT,
    APP_INIT,
    SET_AUTH_HEADER,
} from './auth/auth-constants';

export default store => next => async action => {
    switch (action.type) {
        case SET_AUTH_HEADER:
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`;
            break;

        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            localStorage.setItem('user', JSON.stringify({access_token: action.payload.data.access_token}));
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.data.access_token}`;
            await next(fetchUser());
            break;

        case USER_LOGOUT:
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('user');
            break;

        default:
            axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
            break;
    }
    return next(action);
};