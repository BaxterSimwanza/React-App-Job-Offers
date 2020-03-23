import { takeLatest, put } from "redux-saga/effects"
import {GET_ALL_POSTS} from "../actions/postsActions"
import Axios from "axios"

function* worker_GET_ALL_POST(){
    
    console.log("FUNTION EXECUTING...")

    let result = yield Axios.get("http://localhost:5000/posts")
    yield put({ type: "GET_ALL_POST_ASYNC", payload : result })
}

export function* watcher_GET_ALL_POST(){

    yield takeLatest(GET_ALL_POSTS, worker_GET_ALL_POST)
}