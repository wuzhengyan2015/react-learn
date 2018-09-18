import React, { Component } from 'react'
import './style.scss'

const initState = {
  id: undefined,
  name: '',
  fullName: '',
  enName: '',
  country: '',
  createTime: '',
  teamNum: '',
}

class LeagueEditForm extends Component {
  state = {
    ...initState,
    lackName: false,
    lackCreateTime: false,
    lackCountry: false,
    lackTeamNum: false
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.initData && !preState.name) {
      const params = nextProps.initData
      return {
        id: params.id,
        name: params.name,
        fullName: params.full_name,
        enName: params.en_name,
        country: params.country,
        createTime: params.create_time,
        teamNum: params.team_num
      }
    }
    return null
  }

  handleSubmit = () => {
    const { onOk, initData } = this.props
    const {
      id, name, fullName, enName, country, createTime, teamNum
    } = this.state
    if (!this.formValidate()) {
      return
    }
    const params = {
      name,
      full_name: fullName,
      en_name: enName,
      country,
      create_time: createTime,
      team_num: teamNum
    }
    if (initData) {
      params.id = id
    }
    onOk(params).then(() => {
      this.resetForm()
    })
  }

  formValidate = () => {
    const {
      name, country, createTime, teamNum
    } = this.state
    const lackName = !name
    const lackCountry = !country
    const lackCreateTime = !createTime
    const lackTeamNum = !teamNum
    this.setState({
      lackName,
      lackCountry,
      lackCreateTime,
      lackTeamNum,
    })
    return !(lackName || lackCountry || lackCreateTime || lackTeamNum)
  }

  resetForm = () => {
    this.setState(initState)
  }

  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleCancel = () => {
    const { onCancel } = this.props
    this.resetForm()
    onCancel()
  }

  render() {
    const {
      name, fullName, enName, country, createTime, teamNum,
      lackName, lackCountry, lackCreateTime, lackTeamNum
    } = this.state
    return (
      <div className="league-edit__form">
        <div className="form__group">
          <label htmlFor="leagueName" className="label require">
            <span className="label-name">名称：</span>
            <input value={name} id="leagueName" onChange={e => this.handleChange('name', e)} className={`input ${lackName && 'lack'}`} type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueCreateTime" className="label require">
            <span className="label-name">成立年份：</span>
            <input value={createTime} id="leagueCreateTime" onChange={e => this.handleChange('createTime', e)} className={`input ${lackCreateTime && 'lack'}`} type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueFullName" className="label">
            <span className="label-name">全称：</span>
            <input value={fullName} id="leagueFullName" onChange={e => this.handleChange('fullName', e)} className="input" type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueEnName" className="label">
            <span className="label-name">外文名：</span>
            <input value={enName} id="leagueEnName" onChange={e => this.handleChange('enName', e)} className="input" type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueCountry" className="label require">
            <span className="label-name">国家：</span>
            <input value={country} id="leagueCountry" onChange={e => this.handleChange('country', e)} className={`input ${lackCountry && 'lack'}`} type="text" />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="leagueTeamNum" className="label require">
            <span className="label-name">球队数：</span>
            <input value={teamNum} id="leagueTeamNum" onChange={e => this.handleChange('teamNum', e)} className={`input ${lackTeamNum && 'lack'}`} type="text" />
          </label>
        </div>
        <div className="form__group clearfix">
          <a className="ui-btn float-right" onClick={this.handleSubmit}>确认</a>
          <a className="ui-btn float-right" onClick={this.handleCancel}>取消</a>
        </div>
      </div>
    )
  }
}

export default LeagueEditForm
