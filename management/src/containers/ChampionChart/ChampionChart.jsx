import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import _ from 'lodash'
import { getChampions } from '../../redux/actions/champions'
import './style.scss'

@connect(
  state => ({ champions: state.champions }),
  dispatch => bindActionCreators({ getChampions }, dispatch)
)
class ChampionChart extends Component {
  constructor(props) {
    super(props)
    this.chartRef = React.createRef()
    this.resizeChart = _.throttle(this.resizeChart, 200)
  }

  componentDidMount() {
    const { getChampions } = this.props
    getChampions().then(() => {
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
    const { champions } = this.props
    const teamsName = []
    const championsNum = []
    this.myChart = echarts.init(this.chartRef.current)
    champions.list.forEach((item) => {
      teamsName.unshift(item.team)
      championsNum.unshift(item.champions)
    })
    this.myChart.setOption({
      title: {
        text: '欧冠冠军数'
      },
      tooltip: {},
      xAxis: {
      },
      yAxis: {
        data: teamsName
      },
      series: [{
        name: '夺冠数',
        type: 'bar',
        data: championsNum,
        itemStyle: {
          normal: {
            color(params) {
              const colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
              return colorList[params.dataIndex]
            }
          },
        }
      }]
    })
  }

  render() {
    return (
      <div ref={this.chartRef} className="chart-wrapper">

      </div>
    )
  }
}

export default ChampionChart
