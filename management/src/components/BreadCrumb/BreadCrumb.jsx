import React, { Component } from 'react'
import './BreadCrumb.scss'

/* eslint-disable */
class BreadCrumb extends Component {
  render() {
    return (
      <div className="ui-breadcrumb">
        {this.props.children}
      </div>
    )
  }
}

export default BreadCrumb