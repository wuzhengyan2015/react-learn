import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { getItems } from "../../redux/actions/items";
import ItemInfo from './subpage/ItemInfo'
import ItemList from './subpage/ItemList'

class Items extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedItem: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    this.props.getItems()
  }
  handleClick (item) {
    this.setState({
      selectedItem: item
    })
  }
  render() {
    const items = this.props.items.body || {}
    return (
      <div className="items_wrapper">
        <ItemInfo selectedItem={this.state.selectedItem}/>
        <ItemList items={items} itemClick={this.handleClick}/>
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
