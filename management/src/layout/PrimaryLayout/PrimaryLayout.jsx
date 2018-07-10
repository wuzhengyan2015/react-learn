import React from 'react'
import { Layout } from 'antd'
import PrimarySideBar from 'containers/PrimarySideBar/PrimarySideBar'
import PrimaryHeader from 'containers/PrimaryHeader/PrimaryHeader'
import PrimaryFooter from 'containers/PrimaryFooter/PrimaryFooter'
import './style.scss'

const { Content } = Layout

function PrimaryLayout() {
  return (
    <Layout>
      <PrimarySideBar />
      <Layout>
        <PrimaryHeader />
        <Content className="ui-main-content">
            Content
        </Content>
        <PrimaryFooter />
      </Layout>
    </Layout>
  )
}

export default PrimaryLayout
