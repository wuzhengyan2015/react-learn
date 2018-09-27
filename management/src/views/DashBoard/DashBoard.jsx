import React, { Component } from 'react'
import ChampionChart from '../../containers/ChampionChart/ChampionChart'
import './style.scss'

class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__champion-chart">
          <ChampionChart />
        </div>
        <div className="dashboard__champion-chart2"></div>
        <div className="dashboard__champion-chart3"></div>
        <div className="dashboard__champion-chart4"></div>
      </div>
    )
  }
}

export default DashBoard
