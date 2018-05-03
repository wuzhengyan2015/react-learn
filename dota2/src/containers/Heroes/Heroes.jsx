import React, { Component } from "react";
import { connect } from "react-redux";
import { getHeroes, setCurHero } from "../../redux/actions/heroes";
import HeroInfo from "./subpage/HeroInfo";
import HeroList from "./subpage/HeroList";
import "./style.scss";
import { Route, Switch } from "react-router-dom";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroInfo: {}
    };
  }
  componentDidMount() {
    this.props.getHeroes();
  }
  render() {
    const herose = this.props.heroes.body || [];
    return (
      <div className="heroes-wrapper">
        <Switch>
          <Route
            exact
            path={this.props.match.path}
            render={() => (
              <div>
                <HeroInfo hero={this.state.heroInfo} hero={this.props.cur} />
                <HeroList list={herose} hoverHandler={this.props.setCurHero} />
              </div>
            )}
          />
          <Route path={`${this.props.match.path}/:heroname`} render={() => (
              <div>
                hahah
              </div>
            )}/>
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
