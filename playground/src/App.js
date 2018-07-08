import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxActionsDemo from './redux-actions/index'
import ReduxSagasDemo from './redux-sagas/index.jsx'
import ReduxPromiseDemo from './redux-promise/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxPromiseDemo />
      </div>
    )
  }
}

export default App;
