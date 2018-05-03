import React, {Component} from 'react'
import './heroinfo.scss'

class HeroInfo extends Component {
  render () {
    let {name = "请选择英雄", atk_l, roles_l} = this.props.hero
    let tags = roles_l ? [atk_l].concat(roles_l) : []
    return (
      <div className="heroinfo-wrapper">
        <h3 className="heroinfo-name">
          {name}
        </h3>
        <p className="heroinfo-tags">
          {tags.join(' - ')}
        </p>
      </div>
    )
  }
}

export default HeroInfo