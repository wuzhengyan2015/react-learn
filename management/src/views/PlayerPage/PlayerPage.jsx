import React, { Component } from 'react'
import { Tabs } from 'antd'
import PlayerLazyLoad from '../../containers/PlayerLazyLoad/PlayerLazyLoad'
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
          <TabPane tab="滚动加载" key="scrollLoad">Content of Tab Pane 2</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default PlayerPage
