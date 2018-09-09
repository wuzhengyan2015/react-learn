import React, { Component } from 'react'
import './style.scss'

class LeagueEditForm extends Component {
  state = {
    name: '',
    fullName: '',
    enName: '',
    country: '',
    createTime: '',
    teamNum: ''
  }

  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  render() {
    const {
      name, fullName, enName, country, createTime, teamNum
    } = this.state
    return (
      <div className="league-edit__form">
        <div className="form__group">
          <label htmlFor="leagueName" className="label require">
            <span className="label-name">名称：</span>
            <input value={name} id="leagueName" onChange={e => this.handleChange('name', e)} className="input" type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueCreateTime" className="label require">
            <span className="label-name">成立年份：</span>
            <input value={fullName} id="leagueCreateTime" onChange={e => this.handleChange('fullName', e)} className="input" type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueFullName" className="label">
            <span className="label-name">全称：</span>
            <input value={enName} id="leagueFullName" onChange={e => this.handleChange('enName', e)} className="input" type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueEnName" className="label">
            <span className="label-name">外文名：</span>
            <input value={country} id="leagueEnName" onChange={e => this.handleChange('country', e)} className="input" type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueCountry" className="label require">
            <span className="label-name">国家：</span>
            <input value={createTime} id="leagueCountry" onChange={e => this.handleChange('createTime', e)} className="input" type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueTeamNum" className="label require">
            <span className="label-name">球队数：</span>
            <input value={teamNum} id="leagueTeamNum" onChange={e => this.handleChange('teamNum', e)} className="input" type="text" />
          </label>
        </div>
      </div>
    )
  }
}

export default LeagueEditForm
