/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {counterActions} from './actions'

@connect(
  state => ({counter: state.counter}),
  dispatch => bindActionCreators(counterActions, dispatch)
)
class Counter extends Component {
  render () {
    return (
      <div>
        <button onClick={() => {this.props.incrementAsync().catch(e => console.log(e))}}>
          IncrementAsync
        </button>
        {' '}
        <button onClick={() => this.props.increment()}>
          Increment
        </button>
        {' '}
        <button onClick={() => this.props.decrement()}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {this.props.counter} times
        </div>
      </div>
    )
  }
}

export default Counter
