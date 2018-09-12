import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LeagueForm from '../../containers/LeagueForm/LeagueForm'
import { seachLeagues } from '../../redux/actions/league'
import './style.scss'

@connect(
  state => state,
  dispatch => bindActionCreators({ seachLeagues }, dispatch)
)
class LeaguePage extends Component {
  state = {
    searchTxt: ''
  }

  handleChagne = (e) => {
    this.setState({
      searchTxt: e.target.value
    })
  }

  search = () => {
    const { seachLeagues } = this.props
    console.log(seachLeagues)
    // seachLeagues(1, 10, txt)
  }

  render() {
    const { searchTxt } = this.state
    return (
      <div className="leaguePage">
        <div className="league-page__header">
          <div className="league-page__search">
            <input value={searchTxt} onChange={this.handleChagne} className="ui-input" type="text" />
            <a className="ui-btn" onClick={this.search}>搜索</a>
          </div>
          <div className="league-page__add">
            <a className="ui-btn">添加</a>
          </div>
        </div>
        <LeagueForm />
      </div>
    )
  }
}

export default LeaguePage
