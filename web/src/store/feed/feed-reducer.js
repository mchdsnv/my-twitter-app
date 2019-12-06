import { success, error } from 'redux-saga-requests';
import {ADD_POST, UPDATE_POST, DELETE_POST, FETCH_POSTS} from './feed-constants';

const initialState = {
    pending: false,
    posts: [],
    error: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
        case UPDATE_POST:
        case DELETE_POST:
        case FETCH_POSTS:
            return {
                ...state,
                pending: true
            };

        case success(ADD_POST):
            return {
                ...state,
                pending: false,
                posts: [...state.posts, action.payload.post],
                error: []
            };

        case success(FETCH_POSTS):
            console.log(action.payload);
            return {
                ...state,
                pending: false,
                posts: [...state.posts, action.payload.data.data],
                error: []
            };

        case success(UPDATE_POST):
            return {
                ...state,
                pending: false,
                posts: state.posts.map(post => post.id === action.payload.post.id ? {...post, content: action.payload.content, editing: !post.editing} : post),
                error: []
            };

        case success(DELETE_POST):
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.post.id)
            };

        case error(ADD_POST):
        case error(UPDATE_POST):
        case error(DELETE_POST):
        case error(FETCH_POSTS):
            return {
                ...state,
                error: [...state.error, action.error]
            };

        default:
            return state;
    }
};

export default reducer;