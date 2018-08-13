import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.scss'

const { Sider } = Layout
const linkConfig = [{
  key: 'dashBoard',
  to: '/',
  icon: 'dashboard',
  text: '仪表盘'
}, {
  key: 'leagues',
  to: '/leagues',
  icon: 'appstore-o',
  text: '联赛管理'
}, {
  key: 'teams',
  to: '/teams',
  icon: 'team',
  text: '球队管理'
}, {
  key: 'players',
  to: '/players',
  icon: 'user',
  text: '球员管理'
}]

@connect(
  state => ({ collapsed: state.sidebar.collapsed })
)
class PrimarySideBar extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
  }

  handleMenuClick = (to) => {
    const { history } = this.props
    history.push(to)
  }

  render() {
    const { collapsed } = this.props
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <a href="/" className="logo"><i /></a>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[linkConfig[0].key]}>
          {
            linkConfig.map(item => (
              <Menu.Item key={item.key} onClick={() => this.handleMenuClick(item.to)}>
                <Icon type={item.icon} />
                <span>{item.text}</span>
              </Menu.Item>
            ))
          }
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(PrimarySideBar)
