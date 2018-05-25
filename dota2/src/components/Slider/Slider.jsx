import React, {Component} from 'react'
import './style.scss'
import Item from './Item/Item'

class Slider extends Component {
  render () {
    return (
      <div className="ui-slider">
        <a className="ui-slider-arrow" href="javascript:void(0);">&lt;</a>
        <ul className="ui-slider-list">
          {
            this.props.items.map((item, index) => (
                <Item item={item} key={item.id}/>
              )
            )
          }
        </ul>
        <ul className="ui-slider-dots">

        </ul>
        <a className="ui-slider-arrow" href="javascript:void(0);">&gt;</a>
      </div>
    )
  }
}

export default Slider