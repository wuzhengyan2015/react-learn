import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTeams } from '../../redux/actions/teams'

@connect(
  null,
  dispatch => bindActionCreators({
    getTeams
  }, dispatch)
)
class TeamPage extends Component {
  constructor(props) {
    super(props)
    this.page = 1
    this.pageSize = 10
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams() {
    const { getTeams } = this.props
    getTeams(this.page, this.pageSize)
  }

  render() {
    return (
      <div>
        TeamPage
      </div>
    )
  }
}

export default TeamPage
