import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_SIGNUP,
    GET_USER,
} from "./twitter-actions";

import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from "./sagas";

const initialState = {
    user: null,
    authenticated: false,
    token: '',
    error: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
        case USER_LOGIN:
        case USER_SIGNUP:
            return {
                ...state,
                loading: true
            };

        case USER_SIGNUP_SUCCESS:
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                authenticated: true,
            };


        case GET_USER_SUCCESS:
            return { ...state,
                loading: false,
                user: action.payload.user.id,
                error: []
            };

        case USER_LOGOUT:
            return { ...state,
                user: null,
                authenticated: false,
                token: null,
                error: []
            };

        case GET_USER_FAILURE:
        case USER_LOGIN_FAILURE:
        case USER_SIGNUP_FAILURE:
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                authenticated: false,
                error: [...state.error, action.error]
            };

        default:
            return state;
    }
};

export default reducer;