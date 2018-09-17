import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import LeagueForm from '../../containers/LeagueForm/LeagueForm'
import LeagueEditForm from '../../containers/LeagueEditForm/LeagueEditForm'
import { searchLeagues, addLeague } from '../../redux/actions/league'
import './style.scss'

const editFormWidth = 680

@connect(
  state => state,
  dispatch => bindActionCreators({ searchLeagues, addLeague }, dispatch)
)
class LeaguePage extends Component {
  state = {
    searchTxt: '',
    type: '',
    visible: false,
    confirmLoading: false,
  }

  handleChagne = (e) => {
    this.setState({
      searchTxt: e.target.value
    })
  }

  search = () => {
    const { searchLeagues } = this.props
    const { searchTxt } = this.state
    searchLeagues(1, 10, searchTxt)
  }

  addLeague = () => {
    this.setState({
      type: 'add',
      visible: true,
    })
  }

  editLeague = () => {
    this.setState({
      type: 'edit',
      visible: true,
    })
  }

  handleOk = () => {
    const { addLeague } = this.props
    this.setState({
      confirmLoading: true,
    })
    addLeague({
      name: 'test3'
    }).then(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      })
    })
  }

  handleCancel = () => {
    console.log('Clicked cancel button')
    this.setState({
      visible: false,
    })
  }

  render() {
    const {
      searchTxt, visible, confirmLoading, type
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
        <LeagueForm edit={this.editLeague} />
        <Modal title={type === 'add' ? '增加联赛' : '编辑联赛'}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          width={editFormWidth}
          cancelText="取消"
          okText="确定"
        >
          <LeagueEditForm />
        </Modal>
      </div>
    )
  }
}

export default LeaguePage
