import React, { Component } from 'react'
import './BreadCrumbItem.scss'

/* eslint-disable */
export default class BreadCrumbItem extends Component {
  render() {
    return (
      <div className="ui-breadcrumb-item">
        { this.props.children }
      </div>
    )
  }
}
