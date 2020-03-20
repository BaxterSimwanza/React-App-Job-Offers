import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import store from "./redux/store/store"

ReactDOM.render(
    //calling and linking the store to our application
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();
