import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PrimaryLayout from 'views/PrimaryLayout/PrimaryLayout'
import LoginPage from 'views/LoginPage/LoginPage'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import context from '../../config/context'
import { login } from '../../redux/actions/login'


@withRouter
@connect(
  state => state.loginInfo,
  dispatch => bindActionCreators({ login }, dispatch)
)
class Entry extends Component {
  state = {
    renderRoute: false
  }

  componentDidMount() {
    const { history, login } = this.props
    const localInfo = context.getUserInfo()
    if (localInfo) {
      const { username, password } = localInfo
      login({ username, password }).then(() => {
        history.push('/')
      }).catch(() => {
        history.push('/login')
      }).finally(() => {
        this.setState({
          renderRoute: true
        })
      })
    } else {
      this.setState({
        renderRoute: true
      })
    }
  }

  render() {
    const { renderRoute } = this.state
    const { isLogin } = this.props
    return (
      <React.Fragment>
        {
          (renderRoute)
            ? (
              <Switch>
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/" isLogin={isLogin} component={PrimaryLayout} />
              </Switch>
            )
            : null
        }
      </React.Fragment>
    )
  }
}

export default Entry
