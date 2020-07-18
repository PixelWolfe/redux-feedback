import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const defaultState = {
    feeling: null,
    understanding: null,
    supported: null,
    comments: null
}

const feedback = (state = defaultState, action)=>{
    switch(action.type){
        case 'SET_FEELING':
            return {...state, feeling: action.payload};
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload}
        case 'SET_SUPPORTED':
            return {...state, supported: action.payload}
        case 'SET_COMMENTS':
            return {...state, comments: action.payload}
    }
    return state;
}

const storeInstance = createStore(
    combineReducers(feedback), applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
