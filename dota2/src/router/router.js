import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/Home/Home'
import Hero from 'containers/Hero/Hero'
import Items from 'containers/Items/Items'
import DotaMap from 'containers/DotaMap/DotaMap'
import Version from 'containers/Version/Version'
import NotFound from 'components/NotFound/NotFound'

const getRouter = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hero' component={Hero} />
        <Route path='/items' component={Items} />
        <Route path='/map' component={DotaMap} />
        <Route path='/version' component={Version} />
        <Route component={NotFound} />
    </Switch>
)

export default getRouter