import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import { getLeagues } from '../../redux/actions/league'
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
          <a className="league-action" onClick={del}>删除</a>
        </span>
      ),
    }
  ]
)

@connect(
  state => ({ leagues: state.leagues }),
  dispatch => bindActionCreators({ getLeagues }, dispatch)
)
class LeagueForm extends Component {
  constructor(props) {
    super(props)
    this.pageSize = 10
  }

  componentDidMount() {
    this.getLeagues(1, this.pageSize)
  }

  getLeagues = (page, limit) => {
    const { getLeagues } = this.props
    getLeagues(page, limit)
  }

  handlePageTurn = (page, limit) => {
    this.getLeagues(page, limit)
  }

  handleDelete = (id) => {
    console.log(id)
  }

  render() {
    const { leagues, edit } = this.props
    return (
      <div className="league-form">
        <Table
          dataSource={leagues.list.items}
          columns={getColumns(edit, this.handleDelete)}
        />
        <div className="form-pagination">
          <Pagination
            total={leagues.list.total}
            pageSize={this.pageSize}
            onChange={this.handlePageTurn}
          />
        </div>
      </div>
    )
  }
}

export default LeagueForm
