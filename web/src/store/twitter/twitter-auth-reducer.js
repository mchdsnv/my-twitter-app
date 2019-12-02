import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from "./twitter-actions";

const initialState = {
    authenticated: false,
    token: '',
    error: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                //
            };

        case LOGIN_SUCCESS:
            localStorage.setItem('user', action.payload.token);
            return { ...state,
                authenticated: action.payload.authenticated,
                token: action.payload.token,
                error: []
            };

        case SIGNUP_SUCCESS:
            return {
                error: []
            };

        case LOGOUT_SUCCESS:
            return { ...state,
                authenticated: action.payload.authenticated
            };

        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case LOGOUT_FAILURE:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                error: [...state.error, action.error]
            };

        case LOGOUT_REQUEST:
        case SIGNUP_REQUEST:
        default:
            return state;
    }
};

export default reducer;