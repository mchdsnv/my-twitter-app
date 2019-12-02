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
            //localStorage.setItem('user', );
            console.log(action.payload.access_token);
            return { ...state,
                authenticated: true,
                token: action.payload.access_token,
                error: []
            };

        case SIGNUP_SUCCESS:
            return {
                error: []
            };

        case LOGOUT_SUCCESS:
            return { ...state, authenticated: false };

        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case LOGOUT_FAILURE:
            return {
                ...state,
                error: [...state.error, action.error]
            };

        case LOGOUT_REQUEST:
        case SIGNUP_REQUEST:
        default:
            return state;
    }
};

export default reducer;