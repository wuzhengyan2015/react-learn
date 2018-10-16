import React from 'react'
import {
  Switch, Route, withRouter, Link
} from 'react-router-dom'
import Loadable from 'react-loadable';
import { Layout } from 'antd'
import BreadCrumb from '../../components/BreadCrumb/index'
import './style.scss'

const DashBoardLoadable = Loadable({
  loader: () => import('views/DashBoard/DashBoard'),
  loading: <div>Loading</div>
})

const DashBoard = () => <DashBoardLoadable />

const LeaguePageLoadable = Loadable({
  loader: () => import('views/LeaguePage/LeaguePage'),
  loading: <div>Loading</div>
})

const LeaguePage = () => <LeaguePageLoadable />

const TeamPageLoadable = Loadable({
  loader: () => import('views/TeamPage/TeamPage'),
  loading: <div>Loading</div>
})

const TeamPage = () => <TeamPageLoadable />

const PlayerPageLoadable = Loadable({
  loader: () => import('views/PlayerPage/PlayerPage'),
  loading: <div>Loading</div>
})

const PlayerPage = () => <PlayerPageLoadable />

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
