import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { IntlProvider, addLocaleData } from 'react-intl'
import Entry from 'containers/Entry/Entry'
import './reset.css'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import store from './redux/index'
import zhCN from './i18n/zh-CN'

addLocaleData([...en, ...zh])

function App() {
  return (
    <IntlProvider locale="zh" messages={zhCN}>
      <Provider store={store}>
        <Router>
          <Entry />
        </Router>
      </Provider>
    </IntlProvider>
  )
}

export default hot(module)(App)
