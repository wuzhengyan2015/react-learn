import React, { Component } from 'react'
import mirror, {actions, connect, render} from 'mirrorx'
console.dir(mirror)

mirror.model({
  name: 'mirror',
  initialState: 0,
  reducers: {
    increment(state) {return state + 1},
    decrement(state) {return state - 1}
  },
  effects: {
    async incrementAsync() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      actions.mirror.increment()
    }
  }
})

class Mirror extends Component {
  render() {
    const { count } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => actions.mirror.decrement()}>-</button>
        <button onClick={() => actions.mirror.increment()}>+</button>
        <button onClick={() => actions.mirror.incrementAsync()}>+ Async</button>
      </div>
    )
  }
}

class Stat extends Component {
  render() {
    const { count } = this.props
    return (
      <div>{count}</div>
    )
  }
}

Stat = connect(state => {
  return {count: state.mirror}
})(Stat)

Mirror = connect(state => {
  return {count: state.mirror}
})(Mirror)

render(<div><Stat /><Mirror /></div>, document.getElementById('root'))
