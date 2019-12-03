import { createRequestInstance, watchRequests, requestsReducer } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import axios from "axios";
import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_REQUEST } from "./twitter-actions";

const userLogin = ({ email, password }) => ({
    type: LOGIN_REQUEST,
    request: {
        url: '/login',
        method: 'post',
        data: { email, password }
    }
});

const userLogout = ({token}) => ({
    type: LOGOUT_REQUEST,
    request: {
        url: '/logout',
        method: 'post',
        data: { token }
    }
});

const signUp = ({name, email, password}) => ({
    type: SIGNUP_REQUEST,
    request: {
        url: '/signup',
        method: 'post',
        data: { name, email, password }
    }
});

const postsReducer = requestsReducer({ actionType: FETCH_POSTS });

// function* fetchPosts(action) {
//     try {
//         const {data} = yield call(axios.get(`/posts/?page=${page}`));
//         yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//     } catch (e) {
//         yield put({type: "USER_FETCH_FAILED", message: e.message});
//     }
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* rootSaga() {
    yield createRequestInstance({ driver: createDriver(axios) });
    yield watchRequests();
}