import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {todoReducer, visibilityFilter} from './reducers/index'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home/index'

const store = createStore(combineReducers({
    todos: todoReducer,
    visibilityFilter
}))

ReactDom.render(
    <Provider store={store}>
       <Router>
           <Home />
        </Router>
    </Provider>,
    document.getElementById('app')
)