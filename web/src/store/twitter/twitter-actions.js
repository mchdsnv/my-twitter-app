import uuid from "uuid";
import moment from "moment";

export const addPost = (message) => ({
    type: "ADD_POST",
    id: uuid.v1(),
    avatar: require("../../components/avatar.png"),
    fullname: 'User',
    message,
    username: '@user',
    created_at: moment(new Date()).fromNow()
});

export const delPost = (deletedPost) => ({
    type: "DELETE_POST",
    post: deletedPost
});

export const updCounter = (counter) => ({
    type: "UPDATE_COUNTER",
    counter: counter
});