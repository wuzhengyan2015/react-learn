import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { collapseSidebar } from 'actions/sidebar'

const { Header } = Layout

@connect(
  state => ({ collapsed: state.sidebar.collapsed }),
  dispatch => bindActionCreators({ collapseSidebar }, dispatch)
)
class PrimaryHeader extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    collapseSidebar: PropTypes.func
  }

  static defaultProps = {
    collapsed: false,
    collapseSidebar: () => {}
  }

  render() {
    const { collapsed, collapseSidebar } = this.props
    return (
      <Header className="ui-main-header">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={collapseSidebar}
        />
      </Header>
    )
  }
}

export default PrimaryHeader
