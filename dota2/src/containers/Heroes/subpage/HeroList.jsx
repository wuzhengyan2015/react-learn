import React, {Component} from 'react'
import './herolist.scss'

class HeroList extends Component {
  render () {
    const list = this.props.list
    return (
      <div className="herolist-wrapper">
        {
          Object.keys(list).map((item, index) => {
            return (
              <div className="hero-item">{item}</div>
            )
          })
        }
      </div>
    )
  }
}

export default HeroList