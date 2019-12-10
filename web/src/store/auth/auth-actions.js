import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, FETCH_USER, APP_INIT, SET_AUTH_HEADER} from './auth-constants';

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
    }
});

export const setAuthHeader = (access_token) => {
    return ({
        type: SET_AUTH_HEADER,
        payload: {access_token}
    })
};


export const appInit = () => async (dispatch) => {
    try {
        const access_token = JSON.parse(localStorage.getItem('access_token'));
        if (access_token) {
            dispatch({
                type: APP_INIT,
                payload: access_token
            });
            dispatch(setAuthHeader(access_token));
            await dispatch(fetchUser());
        }
    } catch (error) {
        // dispatch(showAuthError(error));
    }
};
