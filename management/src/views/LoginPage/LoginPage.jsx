import React, { Component } from 'react'
import LoginForm from 'containers/LoginForm/LoginForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { message } from 'antd'
import context from '../../config/context'
import { login } from '../../redux/actions/login'

@connect(
  state => state.loginInfo,
  dispatch => bindActionCreators({ login }, dispatch)
)
class LoginPage extends Component {
  componentDidMount() {
    const { isLogin, history } = this.props
    if (isLogin) {
      history.push('/')
    }
  }

  handleLoginRequest = (formValues) => {
    const { username, password } = formValues
    const { login } = this.props
    login({ username, password }).then(() => {
      this.handleLoginSuccess(formValues)
    }).catch((e) => {
      message.error(e.message)
    })
  }

  handleLoginSuccess = (formValues) => {
    const { history } = this.props
    if (formValues.remember) {
      context.setUserInfo(formValues)
    }
    history.push('/')
  }

  render() {
    return (
      <LoginForm onLoginRequest={this.handleLoginRequest} />
    )
  }
}

export default LoginPage
