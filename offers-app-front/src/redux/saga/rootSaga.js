import { takeEvery,call, put } from "redux-saga/effects"
import postsActions from "../actions/postsActions"
import Axios from "axios"

function* worker_GET_ALL_POST(action){
    let result = yield call(
        Axios.get("http://localhost:5000/posts")
    )
    yield put(actionToDispatch(result))
}

function* watcher_GET_ALL_POST(){
    yield takeEvery(postsActions.GET_ALL_POSTS, worker_GET_ALL_POST)
}