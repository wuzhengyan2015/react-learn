import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxActionsDemo from './redux-actions/index'
import ReduxSagasDemo from './redux-sagas/index.jsx'
import ReduxPromiseDemo from './redux-promise/index'
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div className="App">
        <EnhanceDemo />
      </div>
    )
  }
}

// axios.get('http://localhost:3004/posts').then((data) => {
//   console.log(data)
// })

function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}
function withHeader
(WrappedComponent) {
  return class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    render() {
      return <div>
        <div className="demo-header">
          我是标题
        </div>
        <WrappedComponent {...this.props}/>
      </div>
    }
  }
}

class Demo extends Component {
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    );
  }
}

const EnhanceDemo = withHeader(Demo);

export default App;
