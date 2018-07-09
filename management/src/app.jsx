import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { hot } from 'react-hot-loader'

const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const { collapsed } = this.state
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>
                nav 1
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>
                nav 2
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>
                nav 3
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280
            }}
          >
            Content
          </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default hot(module)(App)
