import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise' 
import logger from 'redux-logger'
import reducer from './reducer'
import Counter from './Counter.jsx'

const store = createStore(reducer, applyMiddleware(promiseMiddleware, logger))

class ReduxSagasDemo extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <h3>Redux-promise</h3>
          <Counter/>
        </div>
      </Provider>
    )
  }
}

export default ReduxSagasDemo