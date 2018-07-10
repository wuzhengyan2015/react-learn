import React, { Component } from 'react'
import { Layout, Icon } from 'antd'

/* eslint-disable */
const { Header } = Layout

/* eslint-disable */
class PrimaryHeader extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    });
  }
  render () {
    const { collapsed } = this.state
    return (
      <Header className="ui-main-header">
        <Icon
          className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
        />
      </Header>
    )
  }
}

export default PrimaryHeader