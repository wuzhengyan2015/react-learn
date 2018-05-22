import React, { Component } from "react";
import "./iteminfo.scss";

class ItemInfo extends Component {
  render() {
    const { selectedItem } = this.props;
    return (
      <div className="item-info-wrapper clearfix">
        {!selectedItem ? (
          <h2 className="title">物品 ITEMS</h2>
        ) : (
          <div className="item-info">
            <div className="item-left">
              <h3 className="itemName">{selectedItem[0]}</h3>
              <div className="cost-gold">
                <i className="icon-gold" />
                <span>{selectedItem[3]}</span>
              </div>
              <img
                className="itemImg"
                src={selectedItem[2]}
                alt={selectedItem[0]}
              />
            </div>
            <div className="item-right">
              <div
                className="itemDesc"
                dangerouslySetInnerHTML={{
                  __html:
                    selectedItem[4] +
                    selectedItem[5] +
                    selectedItem[6]
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ItemInfo;
