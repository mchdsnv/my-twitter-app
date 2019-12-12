import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {requestsPromiseMiddleware} from 'redux-saga-requests';

import authReducer from './auth/auth-reducer';
import feedReducer from './feed/feed-reducer';

import middleware from './middleware';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        auth: authReducer,
        feed : feedReducer,
    }),
    composeEnhancers(
        applyMiddleware(
            requestsPromiseMiddleware(),
            middleware,
            sagaMiddleware,
            thunk,
            logger,
        )
    ),
);

sagaMiddleware.run(rootSaga);