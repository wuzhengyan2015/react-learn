import React, { Component } from 'react'
import { Rate } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTeams } from '../../redux/actions/teams'
import './style.scss'

@connect(
  state => ({ teams: state.teams }),
  dispatch => bindActionCreators({ getTeams }, dispatch)
)
class TeamRate extends Component {
  constructor(props) {
    super(props)
    const teamsRate = JSON.parse(window.localStorage.teamsRate || null)
    this.state = {
      rate: teamsRate || []
    }
  }

  componentDidMount() {
    const { getTeams } = this.props
    getTeams(1, 10)
  }

  handleChange = (value, id) => {
    const { rate } = this.state
    const team = rate.filter(item => item.id === id)
    if (team.length === 0) {
      rate.push({ id, star: value })
    } else {
      team[0].star = value
    }
    this.setState({
      rate
    })
    window.localStorage.teamsRate = JSON.stringify(rate)
  }

  render() {
    const { teams } = this.props
    const { rate } = this.state
    return (
      <div className="team-rate">
        <h3 className="team-rate__title">球队评分</h3>
        <div className="team-rate__content">
          {
            teams.list.items.map((team) => {
              const cache = rate.filter(item => item.id === team.id)
              return (
                <div key={team.id} className="team-rate__row">
                  <span className="row__name">{team.name}</span>
                  <Rate
                    onChange={star => this.handleChange(star, team.id)}
                    value={cache[0] && cache[0].star}
                    allowClear
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default TeamRate
