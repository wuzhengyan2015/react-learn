import React, { Component } from 'react'
import Slider from 'react-slick'
import ChampionChart from '../../containers/ChampionChart/ChampionChart'
import TeamPie from '../../containers/TeamPie/TeamPie'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import player1 from '../../assets/images/320425.jpg'
import player2 from '../../assets/images/320326.jpg'
import player3 from '../../assets/images/320422.jpg'

class DashBoard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
    return (
      <div className="dashboard">
        <div className="dashboard__panel dashboard__champion-chart">
          <ChampionChart />
        </div>
        <div className="dashboard__panel dashboard__champion-carousel">
          <div className="carousel-warpper">
            <Slider {...settings}>
              <img src={player1} alt="" />
              <img src={player2} alt="" />
              <img src={player3} alt="" />
            </Slider>
          </div>
        </div>
        <div className="dashboard__panel dashboard__team-pie">
          <TeamPie />
        </div>
        <div className="dashboard__panel dashboard__champion-chart4"></div>
      </div>
    )
  }
}

export default DashBoard
