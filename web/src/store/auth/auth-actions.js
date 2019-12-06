import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER, SET_TOKEN} from './auth-constants';

export const userLogin = ({email, password}) => {
    return ({
        type: USER_LOGIN,
        payload: {
            request: {
                url: `/auth/login`,
                method: 'POST',
                data: {email, password}
            },
        },
    })
};

export const userSignup = ({name, email, password}) => {
    return ({
        type: USER_SIGNUP,
        payload: {
            request: {
                url: `/auth/signup`,
                method: 'POST',
                data: {name, email, password}
            },
        },
    })
};

export const userLogout = () => ({
    type: USER_LOGOUT,
    payload: {
        request: {
            url: `/auth/logout`,
            method: 'POST',
        },
    },
});

export const fetchUser = (data) => ({
    type: FETCH_USER,
    payload: {
        request: {
            url: `/user`,
            method: 'GET',
            data: {}
        },
    },
});

export const setToken = () => ({
    type: SET_TOKEN
});