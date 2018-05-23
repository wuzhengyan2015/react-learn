import React, {Component} from 'react'
import './style.scss'

class Item extends Component {
  render () {
    return (
      <li className="ui-slider-item">
        <img src={this.props.item.img} alt=""/>
      </li>
    )
  }
}

export default Item