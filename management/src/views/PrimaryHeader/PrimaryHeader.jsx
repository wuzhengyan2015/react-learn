import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { collapseSidebar } from 'actions/sidebar'
import context from '../../config/context'
import './style.scss'

const { Header } = Layout

@withRouter
@connect(
  state => ({ collapsed: state.sidebar.collapsed }),
  dispatch => bindActionCreators({ collapseSidebar }, dispatch)
)
class PrimaryHeader extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    collapseSidebar: PropTypes.func
  }

  handleLoginOut = (e) => {
    e.preventDefault()
    const { history } = this.props
    context.resetUserInfo()
    history.push('/login')
  }

  render() {
    const { collapsed, collapseSidebar } = this.props
    return (
      <Header className="ui-main-header">
        <Icon
          className="sidebar-trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={collapseSidebar}
        />
        <a href="#" onClick={this.handleLoginOut}>退出</a>
      </Header>
    )
  }
}

export default PrimaryHeader
