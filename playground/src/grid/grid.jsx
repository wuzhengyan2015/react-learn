import React, { Component } from 'react'
import './grid.css'

class grid extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">HEADER</div>
        <div className="menu">MENU</div>
        <div className="content">CONTENT</div>
        <div className="footer">FOOTER</div>
      </div>
    )
  }
}

export default grid
