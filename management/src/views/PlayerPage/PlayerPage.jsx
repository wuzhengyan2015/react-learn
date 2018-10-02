import React, { Component } from 'react'
import { Tabs } from 'antd'
import PlayerLazyLoad from '../../containers/PlayerLazyLoad/PlayerLazyLoad'
import PlayerScrollLoad from '../../containers/PlayerScrollLoad/PlayerScrollLoad'
import './style.scss'

const TabPane = Tabs.TabPane

class PlayerPage extends Component {
  swtichPanel = (key) => {
    console.log(key)
  }

  render() {
    return (
      <div className="player-tabs">
        <Tabs defaultActiveKey="lazyLoad" onChange={this.swtichPanel}>
          <TabPane tab="懒加载" key="lazyLoad"><PlayerLazyLoad /></TabPane>
          <TabPane tab="滚动加载" key="scrollLoad"><PlayerScrollLoad /></TabPane>
        </Tabs>
      </div>
    )
  }
}

export default PlayerPage
