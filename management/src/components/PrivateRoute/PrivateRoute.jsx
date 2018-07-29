import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLogin ? (
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
