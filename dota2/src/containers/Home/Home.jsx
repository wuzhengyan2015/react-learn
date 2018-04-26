import React, {Component} from 'react'
import './style.scss'

class Home extends Component {
    render () {
        const bannerHeight = window.innerHeight - 64 + 'px'
        return (
            <div className="me-home-wrapper">
                <div className="me-banner" style={{height: bannerHeight}}></div>
            </div>
        )
    }
}

export default Home
