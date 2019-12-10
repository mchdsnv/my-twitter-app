import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

import authReducer from './auth/auth-reducer';
import feedReducer from './feed/feed-reducer';

import authSaga from './auth/auth-sagas';
import feedSaga from './feed/feed-sagas';

import middleware from './middleware';

import {SET_AUTH_HEADER, USER_LOGOUT} from './auth/auth-constants';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const setAxiosDefaults = (store) => (next) => (action) => {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
    switch (action.type) {
        case SET_AUTH_HEADER:
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`;
            break;
        case USER_LOGOUT:
            delete axios.defaults.headers.common['Authorization'];
            break;
        default:
            break;
    }
    return next(action)
};

export default createStore(
    combineReducers({
        auth: authReducer,
        feed : feedReducer,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware, middleware, thunk, logger, setAxiosDefaults)),
);

sagaMiddleware.run(authSaga, feedSaga);