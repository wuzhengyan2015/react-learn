import React, { Component } from 'react'
import apiService from '../../services/index'

/* eslint-disable */
class LeagueForm extends Component {
  componentDidMount () {
    apiService.getLeagues().then((response) => {
      console.log(response)
    })
  }
  render() {
    return (
      <div className="league-form">
        <table>
        </table>
      </div>
    )
  }
}

export default LeagueForm