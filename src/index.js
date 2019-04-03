import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {movieReducer} from './store/MovieReducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'


const store = createStore(
    combineReducers({movieReducer, form: formReducer}),
   applyMiddleware(thunk)
)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
