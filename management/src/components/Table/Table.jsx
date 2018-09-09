import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Table.scss'

export const getType = obj => Object.prototype.toString.call(obj).slice(8, -1)

class Table extends Component {
  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
  }

  render() {
    const { dataSource, columns } = this.props
    return (
      <div className="ui-table">
        <table>
          <thead>
            <tr className="ui-table-row">{ columns.map(col => <th className="ui-table-th" key={col.key}>{col.title}</th>) }</tr>
          </thead>
          <tbody>
            {
              dataSource.map(record => (
                <tr className="ui-table-row" key={record.key}>
                  {
                    columns.map((col) => {
                      let content = record[col.dataIndex]
                      if (getType(col.render) === 'Function') {
                        content = col.render(content, record)
                      }
                      return <td key={col.key} className="ui-table-td">{content}</td>
                    })
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
