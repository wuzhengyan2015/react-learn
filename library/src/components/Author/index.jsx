import React, { Component } from 'react'
import List from './List'
import {Route} from 'react-router-dom'

export default class Author extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <Route
                    exact
                    path={`${match.url}`}
                    render={() => <List />}
                />
            </div>
        )
    }
}