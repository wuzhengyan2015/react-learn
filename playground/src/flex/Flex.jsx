import React, { Component } from 'react';
import './flex.css'

class Flex extends Component {
  render() {
    return (
      <div className="ui-flex">
        <div className="flex-item one">1</div>
        <div className="flex-item two">2</div>
        <div className="flex-item three">3</div>
      </div>
    );
  }
}

export default Flex