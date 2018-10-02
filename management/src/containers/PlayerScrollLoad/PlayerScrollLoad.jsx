import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { getScrollPlayers } from '../../redux/actions/players';
import { findParent } from '../../utils/utils.js';
import './style.scss';

const before = 100;

@connect(
  state => ({ players: state.players }),
  dispatch => bindActionCreators({ getScrollPlayers }, dispatch)
)
class PlayerSrollLoad extends Component {
  state = {
    players: []
  };

  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.handleScroll = _.throttle(this.handleScroll, 200);
    this.scrollEl = null;
    this.page = 1
    this.size = 6
    this.loadMore = true
  }

  static getDerivedStateFromProps(props, state) {
    const player = props.players.list2 && props.players.list2[0];
    if (player && state.players.every(p => p.id !== player.id)) {
      return {
        players: [...state.players, ...props.players.list2]
      };
    }
    return null;
  }

  componentDidMount() {
    const { getScrollPlayers } = this.props;
    this.scrollEl = findParent(this.scrollRef.current, 'ui-main-content');
    this.scrollEl.addEventListener('scroll', this.handleScroll);
    getScrollPlayers(this.page, this.size);
  }

  componentWillUnmount() {
    this.scrollEl.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { getScrollPlayers } = this.props
    const clientHeight = this.scrollEl.clientHeight
    const scrollTop = this.scrollEl.scrollTop
    const scrollHeight = this.scrollEl.scrollHeight
    if (clientHeight + scrollTop >= scrollHeight - before && this.loadMore) {
      this.loadMore = false
      getScrollPlayers(++this.page, this.size).then(() => {
        this.loadMore = true
      })
    }
  };

  render() {
    const { players } = this.state;
    return (
      <div ref={this.scrollRef}>
        {players.map(player => (
          <div key={player.id} className="player-info-wrapper">
            <div className="player-info clearfix">
              <div className="player-info__img">
                <img src={player.picture} alt="" />
              </div>
              <p className="player-info__detail">{player.name}</p>
              <p className="player-info__detail">{player.shirt_num}</p>
              <p className="player-info__detail">{player.country}</p>
              <p className="player-info__detail">{player.birthday}</p>
              <p className="player-info__detail">{player.transfer_fee}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PlayerSrollLoad;
