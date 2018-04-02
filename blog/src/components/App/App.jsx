import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Crumb from '../Crumb/Crumb'
import SideBar from '../../components/SideBar/SideBar'
import getRouter from '../../router/router';
import './style.scss'
import { Layout, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="ui-bg-black ui-header">
                        <h2 className="ui-header-title"><span>wu</span><span>zy</span></h2>
                        <p className="ui-header-desc">人生的目标不是要获得永生，而是要创造永恒</p>
                    </Header>
                    <Row className="ui-bg-white">
                        <Col span={18} offset={3}><Nav /></Col>
                    </Row>
                    <Row>
                        <Col span={18} offset={3}><Crumb /></Col>
                    </Row>
                    <Row>
                        <Col span={13} offset={3}>
                            {getRouter()}
                        </Col>
                        <Col span={5}>
                            <SideBar />
                        </Col>
                    </Row>
                    <Footer>
                        <div className="ui-footer">
                            <p>wuxy &copy; 2017-2018 All rights reserved</p>
                        </div>
                    </Footer>
                </Layout>
            </div>
        )
    }
}