import {SET_TOKEN, REMOVE_TOKEN} from './auth-constants';

export default () => (next) => (action) => {
    switch (action.type) {
        case SET_TOKEN:
            localStorage.setItem('access_token', action.payload.token);
            return next(action);
        case REMOVE_TOKEN:
            localStorage.removeItem('access_token');
            return next(action);
        default:
            return next(action);
    }
};