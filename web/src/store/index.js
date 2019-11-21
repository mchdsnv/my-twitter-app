import {createStore} from "redux";
import reducers from "./twitter/twitter-create-feed-reducer";

const store = createStore(reducers);

export default store;