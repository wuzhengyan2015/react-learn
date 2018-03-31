import React, { Component } from 'react'
import { Menu } from 'antd';
import {Link, withRouter} from 'react-router-dom'
import './style.scss'

class Nav extends Component {
    state = {
        current: 'home',
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    componentWillReceiveProps (nextProps) {
        this.setState({
            current: nextProps.location.pathname.substr(1) || 'home'
        })
    }
    render() {
        return (
            <Menu className="nav-menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/">主页</Link>
                </Menu.Item>
                <Menu.Item key="article">
                    <Link to="/article">文章</Link>
                </Menu.Item>
                <Menu.Item key="drop">
                    <Link to="/drop">点滴</Link>
                </Menu.Item>
                <Menu.Item key="life">
                    <Link to="/life">慢生活</Link>
                </Menu.Item>
                <Menu.Item key="archive">
                    <Link to="/archive">归档</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(Nav)