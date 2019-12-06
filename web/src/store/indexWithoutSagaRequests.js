import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {
    createRequestInstance,
    watchRequests,
    networkReducer,
} from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import logger from 'redux-logger';
import rootSaga, {USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS} from "./twitter/sagas";

import thunk from 'redux-thunk';

import FeedReducer from "./twitter/twitter-feed-reducer";
import AuthReducer from "./twitter/twitter-auth-reducer";

import authSaga from './auth/auth-sagas';

const axiosInstance = (store) => (next) => (action) => {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
        case USER_SIGNUP_SUCCESS:
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
            break;
        default:
            break;
    }
    return next(action)
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        feed : FeedReducer,
        auth: AuthReducer
    }),
    composeEnhancer(applyMiddleware(axiosInstance, thunk, logger, sagaMiddleware))
);
sagaMiddleware.run(authSaga);

export default store;