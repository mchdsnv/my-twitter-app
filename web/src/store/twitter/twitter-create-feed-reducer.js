import {combineReducers} from "redux";
import {ADD_POST, FETCH_POSTS, DELETE_POST, UPDATE_COUNTER} from "./twitter-actions";

const initialState = {
    posts: [],
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload.post]
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.post.id)
            };

        case UPDATE_COUNTER:
            return {
                ...state,
                counter: action.payload.counter
            };

        default:
            return state;
    }
};

export default reducer;