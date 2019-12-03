import {LOGIN, SIGNUP, LOGOUT} from "../twitter/twitter-actions";

export const userLogin = (data) => ({
    type: LOGIN,
    request: {
        url: `http://127.0.0.1:8000/api/auth/login`,
        method: 'POST',
        data
    },
});

export const userSignup = (data) => ({
    type: SIGNUP,
    request: {
        url: `http://127.0.0.1:8000/api/auth/signup`,
        method: 'POST',
        data
    },
});

export const userLogout = (data) => ({
    type: LOGOUT,
    request: {
        url: `http://127.0.0.1:8000/api/auth/signup`,
        method: 'POST',
        data
    },
});