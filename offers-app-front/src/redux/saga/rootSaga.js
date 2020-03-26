import { getAllPostsAPI, getUserAPI } from "../API"
import { takeLatest, put, call } from "redux-saga/effects"
import { GET_ALL_POSTS, GET_ALL_POSTS_ASYNC } from "../actions/postsActions"
import { GET_USER, GET_USER_ASYNC } from "../actions/usersActions"

// P O S T   S A G A S
function* worker_GET_ALL_POSTS(){
    let result = yield call( getAllPostsAPI )
    yield put({ type: GET_ALL_POSTS_ASYNC, payload : result })
}
export function* watcher_GET_ALL_POSTS(){
    yield takeLatest( GET_ALL_POSTS, worker_GET_ALL_POSTS )
}

// U S E R   S A G A S
function* worker_GET_USER(){
    let result = yield call( getUserAPI )
    yield put({ type: GET_USER_ASYNC, payload : result })
}
export function* watcher_GET_USER(){
    console.log ("1st dispatch recieved")
    yield takeLatest( GET_USER, worker_GET_USER )
}