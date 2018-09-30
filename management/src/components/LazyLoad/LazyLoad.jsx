import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class LazyLoad extends Component {
  static propTypes = {
    placeholder: PropTypes.any,
    container: PropTypes.object,
    height: PropTypes.number.isRequired,
    offset: PropTypes.number
  }

  static defaultProps = {
    offset: -200
  }

  state = {
    visible: false
  }

  constructor(props) {
    super(props)
    this.elRef = React.createRef()
    this.onScroll = _.throttle(this.onScroll, 200)
  }

  componentDidMount() {
    const { container } = this.props
    this.scrollEl = container || window
    this.scrollEl.addEventListener('scroll', this.onScroll)
    this.onScroll()
  }

  componentWillUnmount() {
    this.scrollEl.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const { offset } = this.props
    const box = this.elRef.current.getBoundingClientRect()
    if (this.scrollEl.scrollTop + this.scrollEl.clientHeight > box.top + offset) {
      this.setState({
        visible: true
      })
    }
  }

  render() {
    const { height, placeholder, children } = this.props
    const { visible } = this.state
    return (
      <div style={{ height: `${height}px` }} ref={this.elRef}>
        { !visible ? placeholder : children }
      </div>
    )
  }
}

export default LazyLoad
