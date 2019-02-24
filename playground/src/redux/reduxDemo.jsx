import React, { Component } from 'react'
import { createStore, combineReducers } from './redux'
import PropTypes from 'prop-types'

const Context = React.createContext({});

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [...state, action.payload]
    default:
      return state
  }
}

const visibilityReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'FILTER_TODO': 
      return 'todo'
    default:
      return state
  }
}


const store = createStore(combineReducers({
  todoReducer,
  visibilityReducer
}))
let id = 0

class ReduxDemo extends Component {
  // componentDidMount() {
  //   this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate())
  // }
  // componentWillUnmount() {
  //   this.unsubscribe()
  // }
  render() {
    const state = this.props.store.getState();
    console.log(state)
    console.log(store)
    return (
      <div>
        <ul>
          {
            state.todoReducer.map(todo => <li key={todo.id}>{todo.text}</li>)
          }
        </ul>
        <input type="text"/>
        <button onClick={
          () => this.props.store.dispatch({type: 'ADD_TODO', payload: {id: id++, text: '123'}})}>
          add
        </button>
        {this.props.number}
      </div>
    )
  }
}

class Provider extends Component {
  constructor(props) {
    super(props)
    const { store } = this.props;
    this.state = {
      storeState: store.getState(),
      store 
    }
  }
  componentDidMount() {
    this.state.store.subscribe(() => {
      const newState = store.getState();
      this.setState({
        storeState: newState
      })
    })
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export default function demo () {
  return (
    <Provider store={store}>
      <Context.Consumer>
        { ({ storeState, store }) => {
          return <ReduxDemo store={store} />
        }}
      </Context.Consumer>
    </Provider>
  )
}
