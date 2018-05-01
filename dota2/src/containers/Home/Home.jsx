import React, { Component } from "react";
import "./style.scss";
import HomePanel from "components/HomePanel/HomePanel";
import { connect } from "react-redux";
import { getBaseIntro } from "../../redux/actions/baseIntro";

class Home extends Component {
  componentDidMount() {
    this.props.getBaseIntro();
  }
  render() {
    const baseIntro = this.props.baseIntro.body || [];
    return (
      <div className="me-home-wrapper">
        <section className="me-banner">
          <h3 className="title">开启你的DOTA2征程</h3>
          <p className="legend">
            DOTA2是由DotA之父lcefrog和VALVE公司
            <br />通过起源2引擎打造的唯一正统续作，
            <br />完整继承了DotA超过一百位英雄。
            <br />让荣耀得到传承、信仰得到延续。
            <br />英雄、需要新的战斗！
          </p>
        </section>
        {
          baseIntro.map((item, index) => (
            <section className="me-intro" key={index}>
              <HomePanel intro={item} index={index}/>
            </section>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseIntro: state.baseIntro
});

const mapDispatchToProps = dispatch => ({
  getBaseIntro: () => {
    dispatch(getBaseIntro());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
