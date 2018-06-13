import React, { Component } from "react";
import "./style.scss";

class SkeletonScreen extends Component {
  render () {
    return (
      <div className="ui-skeleton-screen">
        <ul className="list">
          <li className="item"></li>
          <li className="item"></li>
          <li className="item"></li>
          <li className="item"></li>
          <li className="item"></li>
        </ul>
      </div>
    )
  }
}

export default SkeletonScreen