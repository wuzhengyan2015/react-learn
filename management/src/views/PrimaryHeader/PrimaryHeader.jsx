import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, Popover } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { collapseSidebar } from 'actions/sidebar'
import context from '../../config/context'
import { logout } from '../../redux/actions/login.js'
import userDefault from '../../assets/images/user-default.png'
import './style.scss'

const { Header } = Layout

@withRouter
@connect(
  state => ({ collapsed: state.sidebar.collapsed, userInfo: state.loginInfo }),
  dispatch => bindActionCreators({ collapseSidebar, logout }, dispatch)
)
class PrimaryHeader extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    collapseSidebar: PropTypes.func
  }

  handleLoginOut = () => {
    const { logout, history } = this.props
    logout().then(() => {
      context.resetUserInfo()
      history.push('/login')
    })
  }

  createUserMenu = () => (
    <ul className="header-user-menu">
      <li className="menu-item">
        <Icon type="profile" /><a href="#" className="menu-btn">用户中心</a>
      </li>
      <li className="menu-item">
        <Icon type="logout" /><a href="#" className="menu-btn" onClick={this.handleLoginOut}>登出</a>
      </li>
    </ul>
  )

  render() {
    const { collapsed, collapseSidebar, userInfo } = this.props
    const { avatar = userDefault, nickname } = userInfo
    const userMenu = this.createUserMenu()
    return (
      <Header className="ui-main-header">
        <Icon
          className="sidebar-trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={collapseSidebar}
        />
        <div className="header-uesrinfo">
          <Popover placement="bottomRight" content={userMenu} trigger="click">
            <img className="avatar" src={avatar} alt="" />
            <span className="nickname">{nickname}</span>
          </Popover>
        </div>
      </Header>
    )
  }
}

export default PrimaryHeader
