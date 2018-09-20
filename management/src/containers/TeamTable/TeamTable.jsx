import React, { Component } from 'react'
import { Popconfirm, Table } from 'antd'
import { connect } from 'react-redux'
import EditableContext from './EditableContext'
import EditableFormRow from './EditableFormRow'
import EditableCell from './EditableCell'

@connect(
  state => ({ teams: state.teams })
)
class TeamTable extends Component {
  constructor(props) {
    super(props)
    this.state = { editingKey: '' }
    this.columns = [
      { title: '名称', dataIndex: 'name', key: 'name' },
      { title: '成立年份', dataIndex: 'create_time', key: 'create_time' },
      { title: '全称', dataIndex: 'full_name', key: 'full_name' },
      { title: '外文名', dataIndex: 'en_name', key: 'en_name' },
      { title: '联赛', dataIndex: 'league', key: 'league' },
      {
        title: 'operation',
        key: 'operation',
        render: (text, record) => {
          const editable = this.isEditing(record)
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        href="javascript:void(0)"
                        onClick={() => this.save(form, record.key)}
                        style={{ marginRight: 8 }}
                      >
                        Save
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.key)}>Edit</a>
              )}
            </div>
          )
        },
      },
    ]
  }

  isEditing = (record) => {
    const { editingKey } = this.state
    return record.key === editingKey
  }

  edit(key) {
    this.setState({ editingKey: key })
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return
      }
      const { teams: { list } } = this.props
      const data = list.items
      const newData = [...data]
      const index = newData.findIndex(item => key === item.key)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        // this.setState({ data: newData, editingKey: '' })
      } else {
        newData.push(row)
        // this.setState({ data: newData, editingKey: '' })
      }
    })
  }

  cancel = () => {
    this.setState({ editingKey: '' })
  }

  render() {
    const { teams: { list } } = this.props
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    }
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    })
    return (
      <Table
        components={components}
        bordered
        dataSource={list.items}
        columns={columns}
        rowClassName="editable-row"
      />
    )
  }
}

export default TeamTable
