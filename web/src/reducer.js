import { combineReducers } from 'redux';

const initialState = {
    posts: [],
    counter: 0
}

const posts = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: action.id,
                avatar: action.avatar,
                fullname: action.fullname,
                username: action.username,
                message: action.message,
                created_at: action.created_at
            }

            return [...state, posts];

        case 'DELETE_POST':
            const postsAfterDeleting = state.filter( post => post.id !== action.post.id );
            console.log(action.post.id);
            return [...state, ...postsAfterDeleting]

        default:
            return state;
    }
};

const counter = (state=initialState, action) => {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return action.counter;

        default:
            return state;
    }
};

const reducers = combineReducers({
    posts,
    counter
});

export default reducers;