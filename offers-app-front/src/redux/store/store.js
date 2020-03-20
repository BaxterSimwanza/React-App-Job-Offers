import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers/rootReducer"
import rootSaga from "../saga/rootSaga"


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

sagaMiddleware.run(rootSaga)

export default store