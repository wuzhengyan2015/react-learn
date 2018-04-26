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
    isActive (to, pathname) {
        let isEqual = to === pathname
        return isEqual || (to.length !== 1 && pathname.indexOf(to) === 0)
    }
    render() {
        const {pathname} = this.props.location
        return (
            <header className="me-header">
                <Link to='/' className="me-logo"></Link>
                <nav className="nav-main">
                    {
                        routeMap.map((item, index) => {
                            let className = 'nav-main-item'
                            className += this.isActive(item.to, pathname) ? ' active' : ''
                            return <Link key={index} to={item.to} className={className}>{item.text}</Link>
                        })
                    }
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)