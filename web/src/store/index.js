import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import axios from "axios";
import logger from 'redux-logger';
import rootSaga, {USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS} from "./twitter/sagas";
import {USER_LOGIN, USER_SIGNUP} from "./twitter/twitter-actions";

import {
    createRequestInstance,
    watchRequests,
    networkReducer,
} from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

import FeedReducer from "./twitter/twitter-feed-reducer";
import AuthReducer from "./twitter/twitter-auth-reducer";

const axiosInstance = (store) => (next) => (action) => {
    switch (action.type) {
        case USER_LOGIN:
        case USER_SIGNUP:
            axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
            break;
        case USER_LOGIN_SUCCESS:
        case USER_SIGNUP_SUCCESS:
            axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
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
    composeEnhancer(applyMiddleware(axiosInstance, logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;