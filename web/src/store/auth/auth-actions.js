import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER, APP_INIT, SET_AUTH_HEADER, DELETE_AUTH_HEADER} from './auth-constants';

export const appInit = () => async (dispatch) => {
    try {
        const account = JSON.parse(localStorage.getItem('account'));
        if (account) {
            dispatch ({
                type: APP_INIT,
                payload: account
            });
            dispatch(setAuthHeader(account.access_token));
            await dispatch(fetchUser());
        }
    } catch (error) {
        //
    }
};

export const setAuthHeader = (access_token) => ({
    type: SET_AUTH_HEADER,
    payload: {access_token},
});

export const deleteAuthHeader = () => ({
    type: DELETE_AUTH_HEADER,
});

export const userLogin = ({email, password}) => ({
    type: USER_LOGIN,
    payload: {
        request: {
            url: `/auth/login`,
            method: 'POST',
            data: {email, password},
        },
    },
    meta: {
        asPromise: true,
    },
});

export const userSignup = ({name, email, password}) => ({
    type: USER_SIGNUP,
    payload: {
        request: {
            url: `/auth/signup`,
            method: 'POST',
            data: {name, email, password}
        },
    },
    meta: {
        asPromise: true,
    },
});

export const userLogout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT,
        payload: {
            request: {
                url: `/auth/logout`,
                method: 'POST',
            },
        },
    });

    dispatch(deleteAuthHeader());
};

export const fetchUser = () => ({
    type: FETCH_USER,
    payload: {
        request: {
            url: `/user`,
            method: 'GET',
        },
    },
    meta: {
        asPromise: true,
    },
});