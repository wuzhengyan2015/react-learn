import React, { Component } from 'react'
import { createStore } from './redux'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(reducer)
let id = 0

export default class reduxDemo extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    const state = store.getState();
    console.log(store)
    return (
      <div>
        <ul>
          {
            state.map(todo => <li key={todo.id}>{todo.text}</li>)
          }
        </ul>
        <input type="text"/>
        <button onClick={
          () => store.dispatch({type: 'ADD_TODO', payload: {id: id++, text: '123'}})}>
          add
        </button>
      </div>
    )
  }
}
