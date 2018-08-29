import React, { Component } from 'react'
import apiService from '../../services/index'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './style.scss'

const columns = [{
  title: '名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '成立年份',
  dataIndex: 'create_time',
  key: 'create_time',
}, {
  title: '全称',
  dataIndex: 'full_name',
  key: 'full_name',
}, {
  title: '外文名',
  dataIndex: 'en_name',
  key: 'en_name',
}, {
  title: '国家',
  dataIndex: 'country',
  key: 'country',
}, {
  title: '球队数目',
  dataIndex: 'team_num',
  key: 'team_num',
}, {
  title: '操作',
  key: 'action',
  render: () => (
    <span>
      <a className="league-action">编辑</a>
      <a className="league-action">删除</a>
    </span>
  ),
}]

class LeagueForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leagues: []
    }
  }

  componentDidMount() {
    this.getLeagues()
  }

  getLeagues() {
    apiService.getLeagues().then((response) => {
      let leagues = response.data
      leagues = leagues.map((item) => {
        const keyItem = item
        keyItem.key = item.id + 1
        return keyItem
      })
      this.setState({
        leagues
      })
    })
  }

  render() {
    const { leagues } = this.state
    return (
      <div className="league-form">
        <Table dataSource={leagues} columns={columns} />
        <Pagination total={100} />
      </div>
    )
  }
}

export default LeagueForm
