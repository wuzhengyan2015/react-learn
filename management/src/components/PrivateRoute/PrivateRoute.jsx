import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import context from '../../config/context'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (context.isLogin() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    ))
    }
  />
)

/* HOC
const requireAuth = (Component) => {
  const isLogin = true
  return (props) => {
    if (!isLogin) {
      props.history.push('/login')
    }
    return <Component {...props} />
  }
} */

export default PrivateRoute
