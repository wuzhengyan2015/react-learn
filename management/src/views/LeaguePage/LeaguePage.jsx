import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import LeagueForm from '../../containers/LeagueForm/LeagueForm'
import LeagueEditForm from '../../containers/LeagueEditForm/LeagueEditForm'
import Pagination from '../../components/Pagination/Pagination'
import {
  searchLeagues, addLeague, getLeagues, putLeague, deleteLeague
} from '../../redux/actions/league'
import './style.scss'

const editFormWidth = 680

@connect(
  state => ({ total: state.leagues.list.total }),
  dispatch => bindActionCreators({
    searchLeagues, addLeague, getLeagues, putLeague, deleteLeague
  }, dispatch)
)
class LeaguePage extends Component {
  constructor(props) {
    super(props)
    this.pageSize = 10
    this.page = 1
  }

  state = {
    searchTxt: '',
    type: '',
    visible: false,
    initData: null
  }

  componentDidMount() {
    this.getLeagues(this.page, this.pageSize)
  }

  getLeagues = (page, limit) => {
    const { getLeagues } = this.props
    getLeagues(page, limit)
  }

  handlePageTurn = (page, limit) => {
    this.page = page
    this.getLeagues(page, limit)
  }

  handleChagne = (e) => {
    this.setState({
      searchTxt: e.target.value
    })
  }

  search = () => {
    const { searchLeagues } = this.props
    const { searchTxt } = this.state
    searchLeagues(this.page, this.pageSize, searchTxt)
  }

  addLeague = () => {
    this.setState({
      type: 'add',
      visible: true,
    })
  }

  editLeague = (content, record) => {
    this.setState({
      type: 'edit',
      visible: true,
      initData: record
    })
  }

  deleteLeague = (id) => {
    const { deleteLeague } = this.props
    deleteLeague(id).then(() => {
      this.setState({
        visible: false,
        initData: null
      })
      this.getLeagues(this.page, this.pageSize)
    })
  }

  handleOk = (params) => {
    const { addLeague, getLeagues } = this.props
    const { type } = this.state
    if (type === 'add') {
      return addLeague({
        ...params
      }).then(() => {
        this.setState({
          visible: false,
          initData: null
        })
        getLeagues(this.page, this.pageSize)
      })
    }
    const { id, ...rest } = params
    return putLeague(id, rest).payload.then(() => {
      this.setState({
        visible: false,
        initData: null
      })
      getLeagues(this.page, this.pageSize)
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      initData: null
    })
  }

  render() {
    const { total } = this.props
    const {
      searchTxt, visible, type, initData
    } = this.state
    return (
      <div className="leaguePage">
        <div className="league-page__header">
          <div className="league-page__search">
            <input value={searchTxt} onChange={this.handleChagne} className="ui-input" type="text" />
            <a className="ui-btn" onClick={this.search}>搜索</a>
          </div>
          <div className="league-page__add">
            <a className="ui-btn" onClick={this.addLeague}>添加</a>
          </div>
        </div>
        <LeagueForm edit={this.editLeague} del={this.deleteLeague} />
        <div className="form-pagination">
          <Pagination
            total={total}
            pageSize={this.pageSize}
            onChange={this.handlePageTurn}
          />
        </div>
        <Modal title={type === 'add' ? '增加联赛' : '编辑联赛'}
          visible={visible}
          onCancel={this.handleCancel}
          width={editFormWidth}
          footer={null}
        >
          <LeagueEditForm initData={initData} onCancel={this.handleCancel} onOk={this.handleOk} />
        </Modal>
      </div>
    )
  }
}

export default LeaguePage
