import React from 'react'
import { Layout } from 'antd'
import PrimarySideBar from 'containers/PrimarySideBar/PrimarySideBar'
import PrimaryHeader from 'containers/PrimaryHeader/PrimaryHeader'
import PrimaryContent from 'containers/PrimaryContent/PrimaryContent'
import PrimaryFooter from 'containers/PrimaryFooter/PrimaryFooter'

function PrimaryLayout() {
  return (
    <Layout>
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
