import {createStore, applyMiddleware, combineReducers} from "redux";
import FeedReducer from "./twitter/twitter-feed-reducer";
import AuthReducer from "./twitter/twitter-auth-reducer";
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        feed : FeedReducer,
        auth: AuthReducer
    }),
    applyMiddleware(
        ReduxThunk,
        logger
    )
);

export default store;