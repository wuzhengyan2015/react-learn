import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './style.scss'

const breadcrumbNameMap = (url) => {
    const map = {
        '/article': '文章',
        '/drop': '点滴',
        '/life': '慢生活',
        '/archive': '归档',
        '/article/': '文章详情'
    }
    let text = map[url]
    if (!text && url.indexOf('/article/') !== -1) {
        text = map['/article/']
    }
    return text
};

const Crumb = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {breadcrumbNameMap(url)}
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/">首页</Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <div className="ui-crumb">
            当前位置：
            <Breadcrumb className="ui-crumb-content">
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
});

export default Crumb