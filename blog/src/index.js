import React, { Components } from 'react'
import ReactDom from 'react-dom'
import 'antd/dist/antd.css';
import App from './components/App/App'
// import Test from './components/Test/Test'

ReactDom.render(
    <App />,
    document.getElementById('app')
)