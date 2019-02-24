const createStore = (reducer, preloadState) => {
  let state = preloadState
  const listeners = []
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    console.log(state)
    listeners.forEach(l => l())
  }
  state = reducer(state, {})
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners.filter(l => l !== listener)
    }
  }
  return { getState, dispatch, subscribe }
}

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const combineState = {}
    Object.keys(reducers).reduce((accumulate, key) => {
      accumulate[key] = reducers[key](state[key], action)
      return accumulate
    }, combineState)
    return combineState
  }
}

export { createStore, combineReducers }