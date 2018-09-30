import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LazyLoad from '../../components/LazyLoad/LazyLoad'
import { getPlayers } from '../../redux/actions/players'
import { findParent } from '../../utils/utils.js'
import './style.scss'

@connect(
  state => ({ players: state.players }),
  dispatch => bindActionCreators({ getPlayers }, dispatch)
)
class PlayerLazyLoad extends Component {
  state = {
    scrollEl: null
  }

  constructor(props) {
    super(props)
    this.scrollRef = React.createRef()
  }

  componentDidMount() {
    const { getPlayers } = this.props
    getPlayers()
    this.setState({
      scrollEl: findParent(this.scrollRef.current, 'player-tabs')
    })
  }

  render() {
    const { players } = this.props
    const { scrollEl } = this.state
    return (
      <div ref={this.scrollRef}>
        {
          players.list.map(player => (
            <div key={player.id} className="player-info-wrapper">
              <div className="player-info clearfix">
                <div className="player-info__img">
                  <LazyLoad height={365} container={scrollEl}>
                    <img src={player.picture} alt="" />
                  </LazyLoad>
                </div>
                <p className="player-info__detail">{player.name}</p>
                <p className="player-info__detail">{player.shirt_num}</p>
                <p className="player-info__detail">{player.country}</p>
                <p className="player-info__detail">{player.birthday}</p>
                <p className="player-info__detail">{player.transfer_fee}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default PlayerLazyLoad
