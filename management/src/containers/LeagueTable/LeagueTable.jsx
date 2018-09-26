import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from '../../components/Table/Table'
import './style.scss'

const getColumns = (edit, del) => (
  [
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '成立年份', dataIndex: 'create_time', key: 'create_time' },
    { title: '全称', dataIndex: 'full_name', key: 'full_name' },
    { title: '外文名', dataIndex: 'en_name', key: 'en_name' },
    { title: '国家', dataIndex: 'country', key: 'country' },
    { title: '球队数目', dataIndex: 'team_num', key: 'team_num' },
    {
      title: '操作',
      key: 'action',
      render: (content, record) => (
        <span>
          <a className="league-action" onClick={() => edit(content, record)}>编辑</a>
          <a className="league-action" onClick={() => del(record.id)}>删除</a>
        </span>
      ),
    }
  ]
)

@connect(
  state => ({ leagues: state.leagues }),
)
class LeagueForm extends Component {
  render() {
    const { leagues, edit, del } = this.props
    return (
      <div className="league-form">
        <Table
          dataSource={leagues.list.items}
          columns={getColumns(edit, del)}
          pagination={{ pageSize: 20, position: 'top' }}
        />
      </div>
    )
  }
}

export default LeagueForm
