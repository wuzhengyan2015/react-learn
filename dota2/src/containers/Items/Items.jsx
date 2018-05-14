import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { getItems } from "../../redux/actions/items";
import ItemInfo from './subpage/ItemInfo'
import ItemList from './subpage/ItemList'

class Items extends Component {
  componentDidMount () {
    this.props.getItems()
  }
  render() {
    const items = this.props.items.body || {}
    return (
      <div className="items_wrapper">
        <ItemInfo />
        <ItemList items={items}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getItems: () => {
    dispatch(getItems());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
