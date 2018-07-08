import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {connect} from 'react-redux'
import {increment, decrement} from './action'
import {bindActionCreators} from 'redux'

class ReduxActionsDemo extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <h3>Redux-actions</h3>
          <Counter/>
        </div>
      </Provider>
    )
  }
}

@connect(
  state => ({count: state.count}),
  dispatch => ({
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch)
  
  })
)
class Counter extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.increment.bind(this, 1)}>add</button>
        <button onClick={this.props.decrement.bind(this, 1)}>substract</button>
        <div>{this.props.count}</div>
      </div>
    )
  }
}

export default ReduxActionsDemo