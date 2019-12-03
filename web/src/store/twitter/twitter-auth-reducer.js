import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE, GET_USER_SUCCESS, GET_USER_FAILURE
} from "./twitter-actions";

const initialState = {
    user: null,
    authenticated: false,
    token: '',
    error: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access_token', action.payload.token);
            return { ...state,
                user: action.payload.user,
                authenticated: action.payload.authenticated,
                token: action.payload.token,
                error: []
            };

        case SIGNUP_SUCCESS:
            return {
                error: []
            };

        case GET_USER_SUCCESS:
            console.log(action.payload);
            return { ...state,
                user: action.payload.user.id
            };

        case LOGOUT_SUCCESS:
            return { ...state,
                authenticated: action.payload.authenticated,
            };

        case GET_USER_FAILURE:
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case LOGOUT_FAILURE:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                error: [...state.error, action.error]
            };

        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
        case SIGNUP_REQUEST:
        default:
            return state;
    }
};

export default reducer;