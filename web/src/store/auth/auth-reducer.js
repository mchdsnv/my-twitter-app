import { success, error } from 'redux-saga-requests';
import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER, APP_INIT, SET_TOKEN} from './auth-constants';

const initialState = {
    account: null,
    errors: [],
    pending: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case APP_INIT:
            return {
                ...state,
                account: action.payload,
                errors: []
            };

        case USER_LOGIN:
        case FETCH_USER:
        case USER_SIGNUP:
        case USER_LOGOUT:
            return {
                ...state,
                pending: true,
                errors: []
            };

        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            return {
                ...state,
                pending: false,
                account: action.payload.data,
                errors: []
            };

        case success(FETCH_USER):
            return {
                ...state,
                pending: false,
                account: {...state, ...action.payload.data},
                errors: []
            };

        case success(USER_LOGOUT):
            return {
                ...state,
                ...initialState
            };

        case error(FETCH_USER):
        case error(USER_LOGIN):
        case error(USER_SIGNUP):
        case error(USER_LOGOUT):
            return {
                ...state,
                account: null,
                pending: false,
                errors: [...state.errors, action.error]
            };

        default:
            return state;
    }
};

export default reducer;