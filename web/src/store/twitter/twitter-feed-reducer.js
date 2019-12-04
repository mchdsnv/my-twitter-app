import {
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    FETCH_POSTS
} from './twitter-actions';

import {
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from './sagas';

const initialState = {
    loading: false,
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
                loading: true
            };

        case ADD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload.post],
                error: []
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.data,
                error: []
            };

        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => post.id === action.payload.post.id ? {...post, content: action.payload.content, editing: !post.editing} : post),
                error: []
            };

        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.post.id)
            };

        case ADD_POST_FAILURE:
        case UPDATE_POST_FAILURE:
        case DELETE_POST_FAILURE:
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: [...state.error, action.error]
            };

        default:
            return state;
    }
};

export default reducer;