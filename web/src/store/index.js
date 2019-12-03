import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import FeedReducer from "./twitter/twitter-feed-reducer";
import AuthReducer from "./twitter/twitter-auth-reducer";
// import FeedReducer from "./twitter/twitter-feed-reducer";
// import AuthReducer from "./auth/auth-reducer";

import logger from 'redux-logger';

// import authSaga from './auth/auth-sagas';
// import feedSaga from './auth/feed-sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        feed : FeedReducer,
        auth: AuthReducer
    }),
    composeEnhancer(applyMiddleware(thunk)),
);

// sagaMiddleware.run(authSaga);
// sagaMiddleware.run(feedSaga);

export default store;