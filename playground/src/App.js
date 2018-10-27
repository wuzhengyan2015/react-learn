import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxActionsDemo from './redux-actions/index'
import ReduxSagasDemo from './redux-sagas/index.jsx'
import ReduxPromiseDemo from './redux-promise/index'
import axios from 'axios'
import BaseContext from './context/BaseContext'
import Modal from './portals/Portals'
import Flex from './flex/Flex'
import Grid from './grid/grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DemoWithHeader />
      </div>
    )
  }
}

// axios.get('http://localhost:3004/posts').then((data) => {
//   console.log(data)
// })

function getDisplayName(component) {
  console.log(component.displayName, component.name)
  return component.displayName || component.name || 'Component';
}
function withHeader(WrappedComponent) {
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
function withHeader2 (WrapperComponent) {
  return class HOC extends Component {
      static displayName = `HOC${WrapperComponent.displayName || WrapperComponent.name || 'Component'}`
      render() {
          return (
              <div>
                  <h2>title</h2>
                  <WrapperComponent {...this.props} />
              </div>
          )
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
const DemoWithHeader = withHeader2(Demo)

const EnhanceDemo = withHeader(Demo);

export default App;
