import React, { Component } from 'react'
import PropTypes from 'prop-types'

/* eslint-disable */
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
            <tr>
              {
                columns.map((col) => {
                  return <th key={col.key}>{col.title}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
          {
            dataSource.map((record, index) => {
              return (
                <tr key={record.key}>
                  {
                    columns.map((col) => {
                      return <td key={col.key}>{record[col.dataIndex]}</td>
                    })
                  }
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table