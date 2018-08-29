import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Pagination.scss'

class Pagination extends PureComponent {
  static propTypes = {
    total: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    pageSize: 8,
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      current: 1
    }
  }

  handleClick = (index) => {
    const { onChange } = this.props
    const { current } = this.state
    if (index !== current) {
      onChange(index)
    }
  }

  createPageBtn = () => {
    const { total, pageSize } = this.props
    const { current } = this.state
    const pageNum = Math.ceil(total / pageSize)
    const pageArr = []
    for (let i = 1; i <= pageNum; i++) {
      const active = i === current ? '' : 'active'
      pageArr.push(
        <li className={`ui-pagination-item ${active}`} onClick={i => this.handleClick(i)}>
          <a className="ant-pagination-item-link">{i}</a>
        </li>
      )
    }
    return pageArr
  }

  render() {
    return (
      <div className="ui-pagination">
        <ul className="ui-pagination-list">
          <li className="ui-pagination-item">
            <a className="ant-pagination-item-link">&lt;</a>
          </li>
          { this.createPageBtn() }
          <li className="ui-pagination-item">
            <a className="ant-pagination-item-link">&gt;</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Pagination
