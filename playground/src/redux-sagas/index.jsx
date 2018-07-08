import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import Counter from './Counter.jsx'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

class ReduxSagasDemo extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <h3>Redux-sagas</h3>
          <Counter/>
        </div>
      </Provider>
    )
  }
}

export default ReduxSagasDemo