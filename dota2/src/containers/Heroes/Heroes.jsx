import React, { Component } from "react";
import { connect } from "react-redux";
import { getHeroes } from "../../redux/actions/heroes";
import HeroInfo from './subpage/HeroInfo'
import HeroList from './subpage/HeroList'
import './style.scss'

class Hero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      heroInfo: {}
    }
  }
  componentDidMount () {
    this.props.getHeroes()
  }
  render() {
    const herose = this.props.heroes.body || []
    return (
      <div className="heroes-wrapper">
        <HeroInfo hero={this.state.heroInfo}/>
        <HeroList list={herose}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes
});

const mapDispatchToProps = dispatch => ({
  getHeroes: () => {
    dispatch(getHeroes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
