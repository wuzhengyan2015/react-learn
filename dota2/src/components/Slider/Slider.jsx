import React, {Component} from 'react'
import './style.scss'
import Item from './Item/Item'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cur: 0
    }
    this.t = null
    this.mosueenter = this.mosueenter.bind(this)
    this.mouseleave = this.mouseleave.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.goNext = this.goNext.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.total = nextProps.items.length
    if (this.total !== 0 && this.total !== 1) {
      clearInterval(this.t)
      this.startAnime()
    }
  }
  componentWillUnmount () {
    clearInterval(this.t)
  }
  setTranslate (x) {
    this._list.style.transform = `translate3d(-${100 * x}%, 0, 0)`
  }
  startAnime () {
    this.t = setInterval(() => {
      let cur = this.state.cur
      if (cur === this.total) {
        cur = 0
        this._list.className = this._list.className.replace(' transition', '')
        this._list.style.transform = `translate3d(0, 0, 0)`
        void this._list.offsetWidth
        this._list.className += ' transition'
      }
      cur++
      this.setState({
        cur
      })
      this.setTranslate(cur)
    }, 3000)
  }
  mosueenter () {
    clearInterval(this.t)
  }
  mouseleave () {
    this.startAnime()
  }
  goPrev () {
    if (this.state.cur === 0) return
    let cur = this.state.cur - 1
    this.setState({
      cur
    })
    this.setTranslate(cur)
  }
  goNext () {
    if (this.state.cur === this.total - 1) return
    let cur = this.state.cur % this.total + 1
    this.setState({
      cur: cur
    })
    this.setTranslate(cur)
  }
  goToIndex (index) {
    this.setState({
      cur: index
    })
    this.setTranslate(index)
  }
  render () {
    const items = this.props.items.length !== 0 ? this.props.items.concat(this.props.items[0]) : []
    return (
      <div className="ui-slider" onMouseEnter={this.mosueenter} onMouseLeave={this.mouseleave}>
        <a className="ui-slider-arrow left-arrow" href="javascript:void(0);" onClick={this.goPrev}>&lt;</a>
        <ul className="ui-slider-list transition" ref={(list) => { this._list = list; }}>
          {
            items.map((item, index) => (
                <Item item={item} key={index + item.id}/>
              )
            )
          }
        </ul>
        <ul className="ui-slider-dots">
            {
              items.slice(0, items.length - 1).map((item, index) => {
                const className = this.state.cur % this.total === index ? 'dots active' : 'dots'
                const goToIndex = this.goToIndex.bind(this, index)
                return <li key={index} className={className} onClick={goToIndex}></li>
              })
            }
        </ul>
        <a className="ui-slider-arrow right-arrow" href="javascript:void(0);" onClick={this.goNext}>&gt;</a>
      </div>
    )
  }
}

export default Slider