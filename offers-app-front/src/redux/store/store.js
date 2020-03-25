import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers/rootReducer"
//import { watcher_GET_ALL_POST } from "../saga/rootSaga"
import rootSaga from "../saga"

const initialState = { }

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(rootSaga)

export default store