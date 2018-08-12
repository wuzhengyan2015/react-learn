import React from 'react'
import {
  Switch, Route, withRouter, Link
} from 'react-router-dom'
import { Layout } from 'antd'
import DashBoard from 'views/DashBoard/DashBoard'
import LeaguePage from 'views/LeaguePage/LeaguePage'
import TeamPage from 'views/TeamPage/TeamPage'
import PlayerPage from 'views/PlayerPage/PlayerPage'
import BreadCrumb from '../../components/BreadCrumb/index'
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

const breadNameMap = {
  '/': '仪表盘',
  '/leagues': '联赛管理',
  '/teams': '球队管理',
  '/players': '球员管理',
}

function PrimaryContent(props) {
  const { location } = props
  let pathSnippets = location.pathname.split('/').filter(i => i)
  if (pathSnippets.length === 0) {
    pathSnippets = ['']
  }
  return (
    <Content className="ui-main-content">
      <BreadCrumb>
        {
          pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
            return (
              <BreadCrumb.item key={url}>
                <Link to={url}>{breadNameMap[url]}</Link>
              </BreadCrumb.item>
            )
          })
        }
      </BreadCrumb>
      <Switch>
        {
          routes.map(item => <Route key={item.path} {...item} />)
        }
      </Switch>
    </Content>
  )
}

export default withRouter(PrimaryContent)
