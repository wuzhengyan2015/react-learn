import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import _ from 'lodash'
import { getTeams } from '../../redux/actions/teams'
import './style.scss'

@connect(
  state => ({ teams: state.teams }),
  dispatch => bindActionCreators({ getTeams }, dispatch)
)
class PlayerPie extends Component {
  constructor(props) {
    super(props)
    this.chartRef = React.createRef()
    this.resizeChart = _.throttle(this.resizeChart, 200)
  }

  componentDidMount() {
    const { getTeams } = this.props
    getTeams().then(() => {
      this.drawChart()
      window.addEventListener('resize', this.resizeChart)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeChart)
  }

  resizeChart = () => {
    this.myChart.resize()
  }

  drawChart = () => {
    const { teams } = this.props
    this.myChart = echarts.init(this.chartRef.current)
    const leagues = []
    const data = []
    teams.list.items.forEach((item) => {
      leagues.push(item.league)
      const exist = data.filter(league => league.name === item.league)
      if (exist.length !== 0) {
        exist[0].value += 1
      } else {
        data.push({ value: 1, name: item.league })
      }
    })
    this.myChart.setOption({
      title: {
        text: '各大联赛球队占比',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: leagues
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }

  render() {
    return (
      <div ref={this.chartRef} className="chart-wrapper">

      </div>
    )
  }
}

export default PlayerPie
