import React, {Component} from 'react'
import './style.scss'

export default class SideBar extends Component{
    render () {
        return (
            <div className="ui-sidebar">
                <div className="personal-info">
                    <div className="personal-info-top"></div>
                    <div className="personal-info-avatar"></div>
                    <div className="personal-info-content">
                        <span className="name">wuzy</span>
                        <p className="desc">每天写些代码，看些文章~</p>
                    </div>
                </div>
            </div>
        )
    }
}