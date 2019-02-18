import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxDemo from './redux/reduxDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxDemo />
      </div>
    )
  }
}


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

class Demo extends Component {
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    );
  }
}
const DemoWithHeader = withHeader(Demo)


export default App;
