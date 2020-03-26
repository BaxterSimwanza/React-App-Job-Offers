import {all} from "redux-saga/effects"
import {watcher_GET_ALL_POSTS, watcher_GET_USER} from "./rootSaga"

export default function* rootSaga(){
    yield all([watcher_GET_ALL_POSTS(), watcher_GET_USER()])
}