import {createStore, applyMiddleware} from "redux";
import reducer from "./twitter/twitter-create-feed-reducer";
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(
        ReduxThunk,
        logger
    )
);

export default store;