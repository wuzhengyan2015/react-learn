import React from 'react'
import {
  Switch, Route, withRouter, Link
} from 'react-router-dom'
import Loadable from 'react-loadable'
import { Layout, Spin } from 'antd'
import BreadCrumb from '../../components/BreadCrumb/index'
import './style.scss'

const DashBoard = Loadable({
  loader: () => import(/* webpackChunkName: "DashBoard" */'views/DashBoard/DashBoard'),
  loading: () => <Spin size="large" />
})
const LeaguePage = Loadable({
  loader: () => import(/* webpackChunkName: "LeaguePage" */'views/LeaguePage/LeaguePage'),
  loading: () => <Spin size="large" />
})
const TeamPage = Loadable({
  loader: () => import(/* webpackChunkName: "TeamPage" */'views/TeamPage/TeamPage'),
  loading: () => <Spin size="large" />
})
const PlayerPage = Loadable({
  loader: () => import(/* webpackChunkName: "PlayerPage" */'views/PlayerPage/PlayerPage'),
  loading: () => <Spin size="large" />
})

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
