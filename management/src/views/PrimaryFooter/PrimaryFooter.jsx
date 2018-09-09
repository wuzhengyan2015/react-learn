import React from 'react'
import { Layout } from 'antd'
import './style.scss'

const { Footer } = Layout

function PrimaryFooter() {
  return (
    <Footer className="ui-footer">
      CN Dota Wings <span className="heart">❤</span> &copy;
    </Footer>
  )
}

export default PrimaryFooter
