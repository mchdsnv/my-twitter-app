import axios from "axios";
import { createRequestInstance, watchRequests, requestsReducer } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

import {FETCH_POSTS} from '../twitter/twitter-actions';

const fetchPosts = () => ({
    type: FETCH_POSTS,
    request: {
        url: '/posts/?page=${page}',
        method: 'get'
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
export default mySaga;