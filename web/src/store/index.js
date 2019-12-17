import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {requestsPromiseMiddleware} from 'redux-saga-requests';

import authReducer from './auth/auth-reducer';
import feedReducer from './feed/feed-reducer';

import {SET_AUTH_HEADER, DELETE_AUTH_HEADER} from './auth/auth-constants';

import appMiddleware from './middleware';

import rootSaga from './sagas';
import axios from "axios";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const setAxiosDefaults = store => next => action => {
    switch (action.type) {
        case SET_AUTH_HEADER:
            console.log('rezet_debug');
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
            break;
        case DELETE_AUTH_HEADER:
            delete axios.defaults.headers.common['Authorization'];
            break;
        default:
            axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
            break;
    }
    return next(action)
};

export default createStore(
    combineReducers({
        auth: authReducer,
        feed : feedReducer,
    }),
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            appMiddleware,
            setAxiosDefaults,
            sagaMiddleware,
            loggerMiddleware,
            requestsPromiseMiddleware(),
        )
    ),
);

sagaMiddleware.run(rootSaga);