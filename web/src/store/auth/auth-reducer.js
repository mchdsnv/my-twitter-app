import { success, error } from 'redux-saga-requests';
import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER, APP_INIT} from './auth-constants';

const initialState = {
    user: null,
    authenticated: false,
    token: null,
    errors: [],
    pending: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
        case FETCH_USER:
        case USER_SIGNUP:
        case USER_LOGOUT:
            return {
                ...state,
                pending: true
            };

        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            return {
                ...state,
                pending: false,
                token: action.payload.access_token,
                authenticated: true,
            };

        case success(FETCH_USER):
            return {
                ...state,
                pending: false,
                user: {...state.user, ...action.payload.data},
                errors: []
            };

        case success(USER_LOGOUT):
            return { ...state, ...initialState };

        case error(FETCH_USER):
        case error(USER_LOGIN):
        case error(USER_SIGNUP):
        case error(USER_LOGOUT):
            return {
                ...state,
                user: null,
                token: null,
                pending: false,
                authenticated: false,
                errors: [...state.errors, action.error]
            };

        default:
            return state;
    }
};

export default reducer;