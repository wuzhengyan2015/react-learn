import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from 'components/Header/Header'
import getRouter from './router/router'
import { hot } from 'react-hot-loader'

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Header />   
                { getRouter() }
            </div>
        </Router>
    </Provider>
)

export default hot(module)(App)