import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './store/reducer'; 

let store = createStore(reducer);
const app = (
    <Provider store = {store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
