import { success, error } from 'redux-saga-requests';
import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER} from './auth-constants';

const initialState = {
    user: null,
    authenticated: false,
    token: '',
    error: [],
    pending: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
        case FETCH_USER:
        case USER_SIGNUP:
            return {
                ...state,
                pending: true
            };

        case success(USER_LOGIN):
        case success(USER_SIGNUP):
            return {
                ...state,
                pending: false,
                token: action.payload.token,
                authenticated: true,
            };

        case success(FETCH_USER):
            return { ...state,
                pending: false,
                user: action.payload.user.id,
                error: []
            };

        case success(USER_LOGOUT):
            return { ...state,
                user: null,
                authenticated: false,
                token: null,
                error: []
            };

        case error(FETCH_USER):
        case error(USER_LOGIN):
        case error(USER_SIGNUP):
            return {
                ...state,
                user: null,
                token: null,
                pending: false,
                authenticated: false,
                error: [...state.error, action.error]
            };

        default:
            return state;
    }
};

export default reducer;