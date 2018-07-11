import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/index'
import PrimaryLayout from './layout/PrimaryLayout/PrimaryLayout'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PrimaryLayout />
      </Router>
    </Provider>
  )
}

export default hot(module)(App)
