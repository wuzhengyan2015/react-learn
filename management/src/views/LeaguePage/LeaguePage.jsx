import React, { Component } from 'react'
import LeagueForm from '../../containers/LeagueForm/LeagueForm'

/* eslint-disable */
class LeaguePage extends Component {
  render () {
    return (
      <div className="leaguePage">
        <div className="league-page__search">
          <input type="text"/>
          <button>搜索</button>
        </div> 
        <div className="league-page__add">
          <button>添加</button>
        </div> 
        <LeagueForm />
      </div>
    )
  }
}

export default LeaguePage