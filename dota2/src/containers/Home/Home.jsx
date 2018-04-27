import React, { Component } from "react";
import "./style.scss";

class Home extends Component {
  render() {
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
        <section className="me-intro" />
        <section className="me-intro" />
      </div>
    );
  }
}

export default Home;
