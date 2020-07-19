import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import devToolsEnhancer from 'remote-redux-devtools';
import logger from 'redux-logger';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const stepperDefaultState = {
    activeStep: 0,
    completed: {0:false, 1:false, 2:false, 3:false},
}

const feedbackDefaultState = {
    feeling: 3,
    feeling_comment: '',
    understanding: 3,
    understanding_comment: '',
    support: 3,
    support_comment: '',
    additional_comments: '',
}

const feedback = (state = feedbackDefaultState, action)=>{
    switch(action.type){
        case 'SET_FEELING_RATING':
            return {...state, feeling: action.payload};
        case 'SET_FEELING_COMMENT':
            return {...state, feeling_comment: action.payload};
        case 'SET_UNDERSTANDING_RATING':
            return {...state, understanding: action.payload}
        case 'SET_UNDERSTANDING_COMMENT':
            return {...state, understanding_comment: action.payload}
        case 'SET_SUPPORT_RATING':
            return {...state, support: action.payload}
        case 'SET_SUPPORT_COMMENT':
            return {...state, support_comment: action.payload}
        case 'SET_ADDITIONAL_COMMENTS':
            return {...state, additional_comments: action.payload}
        case 'RESET_FEEDBACK':
            return {...state, feeling: 3,
                        feeling_comment: '',
                        understanding: 3,
                        understanding_comment: '',
                        support: 3,
                        support_comment: '',
                        additional_comments: ''};
    }
    return state;
}

const stepper = (state = stepperDefaultState, action)=>{
    switch(action.type){
        case 'SET_STEPPER_ACTIVESTEP':
            return {...state, activeStep: action.payload}
        case 'SET_STEPPER_COMPLETED':
            return {...state, completed: {...state.completed, ...action.payload}}
        case 'RESET_STEPPER':
            return {...state, activeStep: 0, completed: {}}
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({feedback, stepper}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
