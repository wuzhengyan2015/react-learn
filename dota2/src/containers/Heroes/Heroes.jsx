import React, { Component } from "react";
import { connect } from "react-redux";
import { getHeroes, setCurHero } from "../../redux/actions/heroes";
import HeroInfo from "./subpage/HeroInfo";
import HeroList from "./subpage/HeroList";
import HeroFilter from "./subpage/HeroFilter";
import HeroDetail from './subpage/HeroDetail'
import "./style.scss";
import { Route, Switch } from "react-router-dom";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      filter: {}
    };
    this.filteredHeroes = {}
  }
  componentDidMount() {
    this.props.getHeroes();
  }
  componentWillReceiveProps(nextProps){
    // or filter放到redux，heroes和filter变化了filteredHeroes才换
    if (nextProps.heroes.body && nextProps.heroes !== this.props.heroes) {
      const heroes = nextProps.heroes.body || {}
      this.filteredHeroes = this.filterHeroes(heroes, this.state.filter)
    }
  }
  getFilterList(heroes, key) {
    const temp = [];
    for (let item of Object.values(heroes)) {
      let value = item[key];
      if (Object.prototype.toString.call(value) === "[object Array]") {
        for (let i of value) {
          !temp.includes(i) && temp.push(i);
        }
      } else {
        !temp.includes(value) && temp.push(value);
      }
    }
    return temp;
  }
  handleFilter(key, value) {
    this.setState({
      filter: { key, value }
    });
    this.filteredHeroes = this.filterHeroes(this.filteredHeroes,  { key, value })
  }
  filterHeroes(heroes, filter) {
    if (filter.key === "") return heroes;
    heroes = {...heroes}
    for (let item of Object.values(heroes)) {
      item.isDisabled = false
      let value = item[filter.key];
      if (Object.prototype.toString.call(value) === "[object Array]") {
        !value.includes(filter.value) && (item.isDisabled = true);
      } else {
        value !== filter.value && (item.isDisabled = true);
      }
    }
    return heroes;
  }
  render() {
    const heroes = this.filteredHeroes
    const locationList = this.getFilterList(heroes, "roles_l");
    const typeList = this.getFilterList(heroes, "atk_l");
    const nameList = this.getFilterList(heroes, "name");
    return (
      <div className="heroes-wrapper">
        <Switch>
          <Route
            exact
            path={this.props.match.path}
            render={() => (
              <div>
                <HeroInfo hero={this.props.cur} />
                <HeroFilter
                  locationList={locationList}
                  typeList={typeList}
                  nameList={nameList}
                  handleFilter={this.handleFilter}
                />
                <HeroList list={heroes} hoverHandler={this.props.setCurHero} />
              </div>
            )}
          />
          <Route
            path={`${this.props.match.path}/:heroname`}
            render={() => <HeroDetail list={heroes}/>}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes.list,
  cur: state.heroes.cur
});

const mapDispatchToProps = dispatch => ({
  getHeroes: () => {
    dispatch(getHeroes());
  },
  setCurHero: hero => {
    dispatch(setCurHero(hero));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
