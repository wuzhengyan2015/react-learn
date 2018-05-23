import React, { Component } from "react";
import { connect } from "react-redux";
import { getMaps } from "../../redux/actions/maps";
import Slider from '../../components/Slider/Slider'

class DotaMap extends Component {
  componentDidMount() {
    this.props.getMaps();
  }
  render() {
    const {body:items = []} = this.props.maps
    return (
      <div className="maps-wrapper">
        <Slider items={items}/>
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
