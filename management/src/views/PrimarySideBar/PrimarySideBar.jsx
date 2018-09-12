import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { injectIntl } from 'react-intl';
import './style.scss'

const { Sider } = Layout
const linkConfig = [{
  key: 'dashBoard',
  to: '/',
  icon: 'dashboard',
  text: 'nav.dashboard'
}, {
  key: 'leagues',
  to: '/leagues',
  icon: 'appstore-o',
  text: 'nav.leagues'
}, {
  key: 'teams',
  to: '/teams',
  icon: 'team',
  text: 'nav.teams'
}, {
  key: 'players',
  to: '/players',
  icon: 'user',
  text: 'nav.players'
}]

@connect(
  state => ({ collapsed: state.sidebar.collapsed })
)
@injectIntl
class PrimarySideBar extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
  }

  handleMenuClick = (to) => {
    const { history } = this.props
    history.push(to)
  }

  render() {
    const { collapsed, intl } = this.props
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <a href="/" className="logo"><i /></a>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[linkConfig[0].key]}>
          {
            linkConfig.map(item => (
              <Menu.Item key={item.key} onClick={() => this.handleMenuClick(item.to)}>
                <Icon type={item.icon} />
                <span>{intl.formatMessage({ id: item.text })}</span>
              </Menu.Item>
            ))
          }
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(PrimarySideBar)
