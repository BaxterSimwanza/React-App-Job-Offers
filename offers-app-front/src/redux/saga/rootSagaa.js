import { takeLatest, put, call } from "redux-saga/effects"
import {GET_ALL_POSTS} from "../actions/postsActions"
import Axios from "axios"

function fetchFromNode(){
    return Axios.get("http://localhost:5000/posts").then(res => res.data)
}

function* worker_GET_ALL_POST(){
    let result = yield call(fetchFromNode)
    yield put({ type: "GET_ALL_POST_ASYNC", payload : result })
}

export function* watcher_GET_ALL_POST(){
    yield takeLatest(GET_ALL_POSTS, worker_GET_ALL_POST)
}