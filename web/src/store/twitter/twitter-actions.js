export const ADD_POST = 'ADD_POST';
export const addPost = (content) => {
    return({
        type: ADD_POST,
        payload: {content}
    })
};

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = (page = 1) => {
    return ({
        type: FETCH_POSTS,
        payload: {page}
    })
};

export const UPDATE_POST = 'UPDATE_POST ';
export const updatePost = (updatedPost, content) => {
    return ({
        type: UPDATE_POST,
        payload: {updatedPost, content}
    })
};

export const DELETE_POST = 'DELETE_POST ';
export const deletePost = (deletedPost) => {
    return({
        type: DELETE_POST,
        payload: {deletedPost}
    })
};


export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (credentials) => {
    return({
        type: USER_LOGIN,
        payload: {credentials}
    })
};

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => {
    return { type: USER_LOGOUT }
};

export const USER_SIGNUP = 'USER_SIGNUP';
export const userSignup = ({name, email, password}) => {
    return({
        type: USER_SIGNUP,
        payload: {name, email, password}
    })

};

export const GET_USER = 'GET_USER';
export const getUser = () => {
    return ({
        type: GET_USER
    })
};