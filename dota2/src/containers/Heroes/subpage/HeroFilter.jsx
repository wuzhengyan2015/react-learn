import React, { Component } from "react";
import "./HeroFilter.scss";

class HeroFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      roles_l: '',
      atk_l: '',
      name: ''
    }
  }
  handleChange (filter, e) {
    const newState = {
      roles_l: '',
      atk_l: '',
      name: ''
    }
    newState[filter] = e.target.value
    this.setState(newState);
    this.props.handleFilter(filter, e.target.value)
  }
  render() {
    return (
      <div className="herofilter-wrapper">
        <span className="label">过滤器</span>
        <div className="select-filter location-filter">
          <label>按定位</label>
          <select className="form-control form-control-sm" value={this.state.roles_l} onChange={(e) => this.handleChange('roles_l', e)}>
            <option value="">所有</option>
            {
              this.props.locationList.map((item,index) => {
                return <option value={item} key={index}>{item}</option>
              })
            }
          </select>
        </div>
        <div className="select-filter type-filter">
          <label>按类型</label>
          <select className="form-control form-control-sm" value={this.state.atk_l} onChange={(e) => this.handleChange('atk_l', e)}>
            <option value="">所有</option>
            {
              this.props.typeList.map((item,index) => {
                return <option value={item} key={index}>{item}</option>
              })
            }
          </select>
        </div>
        <div className="select-filter name-filter">
          <label>按名称</label>
          <select className="form-control form-control-sm" value={this.state.name} onChange={(e) => this.handleChange('name', e)}>
            <option value="">所有</option>
            {
              this.props.nameList.map((item,index) => {
                return <option value={item} key={index}>{item}</option>
              })
            }
          </select>
        </div>
      </div>
    );
  }
}

export default HeroFilter;
