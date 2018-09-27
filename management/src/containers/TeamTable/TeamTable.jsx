import React, { Component } from 'react'
import { Popconfirm, Table, Spin } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EditableContext } from './EditableContext.js'
import { getTeams, putTeams, deleteTeams } from '../../redux/actions/teams'
import EditableFormRow from './EditableFormRow'
import EditableCell from './EditableCell'
import './style.scss'

@connect(
  state => ({ teams: state.teams }),
  dispatch => bindActionCreators({ getTeams, putTeams, deleteTeams }, dispatch)
)
class TeamTable extends Component {
  constructor(props) {
    super(props)
    this.state = { editingKey: '', isLoading: false, data: [] }
    this.columns = [
      {
        title: '名称', dataIndex: 'name', key: 'name', editable: true
      },
      {
        title: '成立年份', dataIndex: 'create_time', key: 'create_time', editable: true
      },
      {
        title: '全称', dataIndex: 'full_name', key: 'full_name', editable: true
      },
      {
        title: '外文名', dataIndex: 'en_name', key: 'en_name', editable: true
      },
      {
        title: '联赛', dataIndex: 'league', key: 'league', editable: true
      },
      {
        title: '操作',
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
                        保存
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="确定取消？"
                    onConfirm={() => this.cancel(record.key)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a>取消</a>
                  </Popconfirm>
                </span>
              ) : (
                <React.Fragment>
                  <a className="team-operate__btn" onClick={() => this.edit(record.key)}>编辑</a>
                  <Popconfirm
                    title="确定删除？"
                    onConfirm={() => this.deleteTeam(record.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a>删除</a>
                  </Popconfirm>
                </React.Fragment>
              )}
            </div>
          )
        },
      },
    ]
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      data: nextProps.teams.list.items
    }
  }

  isEditing = (record) => {
    const { editingKey } = this.state
    return record.key === editingKey
  }

  edit(key) {
    this.setState({ editingKey: key })
  }

  deleteTeam(id) {
    const { deleteTeams, getTeams } = this.props
    this.setState({
      isLoading: true
    })
    deleteTeams(id).then(() => {
      this.setState({
        isLoading: false
      })
      getTeams()
    })
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return
      }
      const { getTeams, putTeams } = this.props
      const { data } = this.state
      const index = data.findIndex(item => key === item.key)
      if (index > -1) {
        const newItem = { ...data[index], ...row }
        const { id, ...rest } = newItem
        const newData = data.splice(index, 1, newItem)
        this.setState({ data: newData, isLoading: true })
        putTeams(id, rest).then(() => {
          getTeams()
        }).finally(() => {
          this.setState({ editingKey: '', isLoading: false })
        })
      } else {
        this.setState({ editingKey: '' })
      }
    })
  }

  cancel = () => {
    this.setState({ editingKey: '' })
  }

  render() {
    const { data, isLoading } = this.state
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
          inputType: 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    })
    return (
      <React.Fragment>
        <Table
          components={components}
          bordered
          dataSource={data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{ pageSize: 10 }}
        />
        { isLoading && (
          <div className="team-table__spin">
            <Spin size="large" className="spin" />
          </div>
        ) }
      </React.Fragment>
    )
  }
}

export default TeamTable
