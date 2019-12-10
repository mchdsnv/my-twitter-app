import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from './auth/auth-constants';
import {success} from 'redux-saga-requests';

export default () => (next) => (action) => {
    switch (action.type) {
        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            localStorage.setItem('access_token', JSON.stringify(action.payload.data.access_token));
            break;
        case USER_LOGOUT:
            localStorage.removeItem('access_token');
            break;
        default:
            return next(action);
    }
};