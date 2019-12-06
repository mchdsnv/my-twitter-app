import {ADD_POST, FETCH_POSTS, DELETE_POST, UPDATE_POST} from './feed-constants';

export const addPost = (content) => ({
    type: ADD_POST,
        payload: {
            request: {
                url: `/posts`,
                    method: 'PUT',
                    data: {content}
            },
    },
});

export const fetchPosts = (page=1) => {
    return ({
        type: FETCH_POSTS,
        payload: {
            request: {
                url: `/posts`,
                method: 'GET',
                data: {page}
            },
        },
    })
};

export const updatePost = (updatedPost, content) => ({
    type: UPDATE_POST,
    payload: {
        request: {
            url: `/posts`,
            method: 'GET',
            data: {}
        },
    },
});

export const deletePost = (deletedPost) => ({
    type: DELETE_POST,
    payload: {
        request: {
            url: `/posts`,
            method: 'DELETE',
            data: {deletedPost}
        },
    },
});
