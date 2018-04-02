import React, {Components} from 'react'
import ReactDom from  'react-dom'
import 'antd/dist/antd.css'; 
import {Provider} from 'react-redux'
import store from './redux/store'
import App from './components/App/App'
import {BrowserRouter as Router} from 'react-router-dom'
// import Test from './components/Test/Test'

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
)