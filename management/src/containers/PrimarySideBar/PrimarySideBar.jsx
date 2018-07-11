import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import './style.scss'

const { Sider } = Layout

@connect(
  state => ({ collapsed: state.sidebar.collapsed })
)
class PrimarySideBar extends Component {
  static propTypes = {
    collapsed: PropTypes.bool
  }

  static defaultProps = {
    collapsed: false
  }

  render() {
    const { collapsed } = this.props
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <a href="/" className="logo">
          <i />
        </a>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>
                nav 1
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>
                nav 2
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>
                nav 3
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default PrimarySideBar
