import {ADD_POST, DELETE_POST, UPDATE_COUNTER} from "./twitter-actions";


const initialState = {
    posts: [],
    counter: 0
};

const posts = (state=initialState, action) => {
    switch (action.type) {
        case DELETE_POST:
            return state.posts.filter( post => post.id !== action.payload.post.id )

        default:
            return state;
    }
};

export default posts;