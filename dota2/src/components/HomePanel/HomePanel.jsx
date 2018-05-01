import React, { Component } from "react";
import "./style.scss";

class HomePanel extends Component {
  render() {
    const { intro, index } = this.props;
    const panelClass = 'ui-home-panel-content ' + (index % 2 === 0 ? 'reverse': '')
    return (
      <div className="ui-home-panel">
        <div className={panelClass}>
          <div className="desc-wrapper">
            <h3 className="title">{intro.h3}</h3>
            <h4 className="subtitle">{intro.h4}</h4>
            <p className="desc">{intro.p}</p>
          </div>
          <div className="img-wrapper">
            <img className="img" src={intro.img} alt="intro"/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePanel;
