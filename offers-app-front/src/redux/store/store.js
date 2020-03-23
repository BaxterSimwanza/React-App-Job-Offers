import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers/rootReducer"
import { watcher_GET_ALL_POST } from "../saga/rootSaga"


const initialState = {    
    users:[],
    posts:[]
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
    )
)

sagaMiddleware.run(watcher_GET_ALL_POST)

export default store