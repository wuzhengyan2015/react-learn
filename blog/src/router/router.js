import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from 'pages/Home/Home'
import Article from 'pages/Article/Article'
import Drop from 'pages/Drop/Drop'
import Life from 'pages/Life/Life'
import Archive from 'pages/Archive/Archive'

export default () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/article' component={Article} />
            <Route path='/drop' component={Drop} />
            <Route path='/life' component={Life} />
            <Route path='/archive' component={Archive} />
        </Switch>
    </div>
)