import {createStore} from "redux";
import reducer from "./twitter/twitter-create-feed-reducer";

const store = createStore(reducer);

export default store;