import React from 'react'
import { Layout } from 'antd'
import PrimarySideBar from '../PrimarySideBar/PrimarySideBar'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'
import PrimaryContent from '../PrimaryContent/PrimaryContent'
import PrimaryFooter from '../PrimaryFooter/PrimaryFooter'

function PrimaryLayout() {
  return (
    <Layout style={{ height: '100%' }}>
      <PrimarySideBar />
      <Layout>
        <PrimaryHeader />
        <PrimaryContent />
        <PrimaryFooter />
      </Layout>
    </Layout>
  )
}

export default PrimaryLayout
