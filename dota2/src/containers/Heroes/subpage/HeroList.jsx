import React, {Component} from 'react'
import './herolist.scss'
import {Link} from 'react-router-dom'

class HeroList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.list !== this.props.list
  }
  mouseEnterHandler (hero) {
    this.props.hoverHandler(hero)
  }
  render () {
    const list = this.props.list
    return (
      <div className="herolist-wrapper">
        {
          Object.keys(list).map((item, index) => {
            const mouseEnterHandler = this.mouseEnterHandler.bind(this, list[item])
            const itemClass = 'hero-item' + (list[item].isDisabled ? ' disabled' : '')
            return (
              <Link to={`/heroes/${item}`} className={itemClass} key={index} onMouseEnter={mouseEnterHandler}>
                <img className="hero-item-img" src={`/assets/images/heroes/${item}_hphover.png`} alt={item}/>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

export default HeroList