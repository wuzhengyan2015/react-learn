import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './styles.scss'

const routeMap = [
    { to: '/', text: '首页' },
    { to: '/hero', text: '英雄' },
    { to: '/items', text: '物品' },
    { to: '/map', text: '地图' },
    { to: '/version', text: '版本' }
]

class Header extends Component {
    render() {
        const {pathname} = this.props.location
        console.log(pathname)
        return (
            <header className="me-header">
                <Link to='/' className="me-logo"></Link>
                <nav className="nav-main">
                    {
                        routeMap.map((item, index) => {
                            // TODO active
                            return <Link key={index} to={item.to} className="nav-main-item">{item.text}</Link>
                        })
                    }
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)