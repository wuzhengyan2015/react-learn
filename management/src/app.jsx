import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Entry from 'containers/Entry/Entry'
import store from './redux/index'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Entry />
      </Router>
    </Provider>
  )
}

export default hot(module)(App)
