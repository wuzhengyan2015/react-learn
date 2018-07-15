import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import DashBoard from 'views/DashBoard/DashBoard'
import LeaguePage from 'views/LeaguePage/LeaguePage'
import TeamPage from 'views/TeamPage/TeamPage'
import PlayerPage from 'views/PlayerPage/PlayerPage'
import './style.scss'

const { Content } = Layout
const routes = [{
  path: '/',
  component: DashBoard,
  exact: true
}, {
  path: '/leagues',
  component: LeaguePage
}, {
  path: '/teams',
  component: TeamPage
}, {
  path: '/players',
  component: PlayerPage
}]

function PrimaryFooter() {
  return (
    <Content className="ui-main-content">
      <Switch>
        {
          routes.map(item => <Route key={item.path} {...item} />)
        }
      </Switch>
    </Content>
  )
}

export default PrimaryFooter
