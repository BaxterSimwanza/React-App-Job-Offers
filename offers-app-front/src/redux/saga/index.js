import {all} from "redux-saga/effects"
import {watcher_GET_ALL_POST} from "./rootSagaa"

export default function* rootSaga(){
    yield all([watcher_GET_ALL_POST()])
}