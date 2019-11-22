import {ADD_POST, FETCH_POSTS, DELETE_POST, UPDATE_COUNTER, EDIT_POST, UPDATE_POST} from "./twitter-actions";

const initialState = {
    posts: [],
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            console.log(action.payload.post);
            return {
                ...state,
                posts: [...state.posts, action.payload.post]
            };

        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            };

        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.post.id ? { ...post, editing: !post.editing } : post)
            };

        case UPDATE_POST:
            console.log(action.payload);
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.post.id ? {...post, content: action.payload.content, editing: !post.editing} : post)
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