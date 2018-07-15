import React, { Component } from 'react'
import LoginForm from 'containers/LoginForm/LoginForm'
import { message } from 'antd'
import context from '../../config/context'

/* eslint-disable */
class LoginPage extends Component {
  componentDidMount () {
    const isLogin = context.isLogin()
    const {history} = this.props
    isLogin && history.push('/')
  }
  handleLoginRequest = (formValues) => {
    const {userName, password} = formValues
    if (userName === 'admin' && password === 'admin') {
      this.handleLoginSuccess(formValues)
    } else {
      message.error('账号或者密码错误')
    }
  }
  handleLoginSuccess = (formValues) => {
    const { history } = this.props
    context.setUserInfo(formValues)
    history.push('/')
  }
  render () {
    return (
      <LoginForm onLoginRequest={this.handleLoginRequest}/>
    )
  }
}

export default LoginPage