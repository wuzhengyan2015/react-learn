import React, {Component} from 'react'
import './style.scss'
import Item from './Item/Item'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.cur = 0
    this.t = null
  }
  componentWillReceiveProps(nextProps) {
    this.total = nextProps.items.length
    if (this.total !== 0 && this.total !== 1) {
      clearInterval(this.t)
      this.startAnime()
    }
  }
  startAnime () {
    this.t = setInterval(() => {
      if (this.cur === this.total) {
        this.cur = 0
        this._list.className = this._list.className.replace(' transition', '')
        this._list.style.transform = `translate3d(0, 0, 0)`
        void this._list.offsetWidth
        this._list.className += ' transition'
      }
      this.cur++
      this._list.style.transform = `translate3d(-${100 * this.cur}%, 0, 0)`
    }, 3000)
  }
  render () {
    const items = this.props.items.length !== 0 ? this.props.items.concat(this.props.items[0]) : []
    return (
      <div className="ui-slider">
        <a className="ui-slider-arrow left-arrow" href="javascript:void(0);">&lt;</a>
        <ul className="ui-slider-list transition" ref={(list) => { this._list = list; }}>
          {
            items.map((item, index) => (
                <Item item={item} key={index + item.id}/>
              )
            )
          }
        </ul>
        <ul className="ui-slider-dots">

        </ul>
        <a className="ui-slider-arrow right-arrow" href="javascript:void(0);">&gt;</a>
      </div>
    )
  }
}

export default Slider