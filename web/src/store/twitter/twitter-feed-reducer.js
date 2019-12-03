import {
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE
} from "./twitter-actions";

const initialState = {
    posts: [],
    counter: 0,
    editing: false,
    error: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.payload.post],
                counter: 0
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload.posts
            };

        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.post.id ? {...post, content: action.payload.content, editing: !post.editing} : post),
                counter: 0
            };

        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.post.id)
            };

        case ADD_POST_FAILURE:
        case FETCH_POSTS_FAILURE:
        case DELETE_POST_FAILURE:
        case UPDATE_POST_FAILURE:
            return {
                ...state,
                error: [...state.error, action.error]
            };

        case DELETE_POST:
        case UPDATE_POST:
        case ADD_POST:
        case FETCH_POSTS:
        default:
            return state;
    }
};

export default reducer;