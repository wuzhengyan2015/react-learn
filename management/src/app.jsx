import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrimaryLayout from 'views/PrimaryLayout/PrimaryLayout'
import LoginPage from 'views/LoginPage/LoginPage'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import store from './redux/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" component={PrimaryLayout} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default hot(module)(App)
