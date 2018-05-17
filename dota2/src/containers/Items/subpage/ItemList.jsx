import React, { Component } from "react";
import "./itemlist.scss";

const hoverInfoW = 317,
  itemW = 70,
  triW = 30,
  gap = 6;

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverInfo: null
    };
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseEnter(info, e) {
    const box = e.target.getBoundingClientRect();
    let left, top, className;
    if (box.left > window.innerWidth / 2) {
      left = box.left - hoverInfoW - triW - gap;
      className = "hover-detail bebind";
    } else {
      left = box.left + itemW + triW + gap;
      className = "hover-detail front";
    }
    top = box.top - gap * 2 + pageYOffset;
    info.left = left;
    info.top = top;
    info.className = className;
    this.setState({
      hoverInfo: info
    });
  }
  handleMouseOut() {
    this.setState({
      hoverInfo: null
    });
  }
  render() {
    const items = this.props.items;
    return (
      <div className="item-list-wrapper">
        {Object.keys(items).map((name, index) => {
          const handleMouseEnter = e => this.handleMouseEnter(items[name], e);
          return (
            <div
              className="item-display"
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={this.handleMouseOut}
            >
              <img src={items[name][2]} alt={name} />
            </div>
          );
        })}
        {this.state.hoverInfo && (
          <div
            className={this.state.hoverInfo.className}
            style={{
              left: this.state.hoverInfo.left,
              top: this.state.hoverInfo.top
            }}
          >
            <div className="imgIcon">
              <img
                width="74"
                height="56"
                src={this.state.hoverInfo[2]}
                alt={this.state.hoverInfo[0]}
              />
            </div>
            <div className="itemName">{this.state.hoverInfo[0]}</div>
            <div className="itemGold">
              <i className="icon-gold" />
              <span className="cost-gold">{this.state.hoverInfo[3]}</span>
            </div>
            <div
              className="itemDesc"
              dangerouslySetInnerHTML={{
                __html:
                  this.state.hoverInfo[4] +
                  this.state.hoverInfo[5] +
                  this.state.hoverInfo[6]
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ItemList;
