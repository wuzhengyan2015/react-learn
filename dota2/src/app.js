import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import getRouter from './router/router'
import { hot } from 'react-hot-loader'
import './style.scss'

const App = () => (
    <Provider store={store}>
        <Router>
            <div className='me-page-wrapper'>
                <Header />   
                { getRouter() }
                <Footer />
            </div>
        </Router>
    </Provider>
)

export default hot(module)(App)