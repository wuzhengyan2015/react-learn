import React, { Component } from "react";
import { connect } from "react-redux";
import { getMaps } from "../../redux/actions/maps";
import Slider from '../../components/Slider/Slider'
import './style.scss'

class DotaMap extends Component {
  componentDidMount() {
    this.props.getMaps();
  }
  render() {
    const {body:items = []} = this.props.maps
    return (
      <div className="maps-wrapper">
        <h2 className="maps-title">DOTA2地图主题</h2>
        <Slider items={items}/>
        <p className="maps-desc">DOTA2地图的主题背景在匹配比赛中加入了新的地图风格选择。可以根据用户的偏好，选择新模式下的各式主题地图风格，或者经典地图风格。</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  maps: state.maps
});

const mapDispatchToProps = dispatch => ({
  getMaps: () => {
    dispatch(getMaps());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DotaMap);
