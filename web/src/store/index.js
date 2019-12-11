import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {requestsPromiseMiddleware} from 'redux-saga-requests';

import authReducer from './auth/auth-reducer';
import feedReducer from './feed/feed-reducer';

import authSaga from './auth/auth-sagas';
import feedSaga from './feed/feed-sagas';

// import appMiddleware from './middleware';

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
            sagaMiddleware,
            thunk,
            logger,
        )
    ),
);

sagaMiddleware.run(authSaga, feedSaga);