import React, { Component } from 'react'
import { Pagination } from 'antd';
import { connect } from 'react-redux'
import { getArticleList } from '../../redux/actions/article'
import ArticleList from '../../components/ArticleList/ArticleList'
import { Route, Switch } from 'react-router-dom'
import ArticleDetail from '../ArticleDetail/ArticleDetail'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1
        }
        this.pageChangeHandler = this.pageChangeHandler.bind(this)
    }
    componentDidMount() {
        this.props.getArticles(this.state.current)
    }
    pageChangeHandler(page) {
        this.setState({
            current: page
        })
        this.props.getArticles(page)
    }
    render() {
        const list = (this.props.articles && this.props.articles.body) || []
        return (
            <div>
                <Switch>
                    <Route exact path={this.props.match.url} render={() => (
                        <div>
                            <ArticleList isLoading={this.props.articles.isPending} list={list} className="margin-top-0" />
                            <div style={{ textAlign: "center" }}>
                                <Pagination onChange={this.pageChangeHandler} current={this.state.current} defaultCurrent={1} defaultPageSize={4} total={6} />
                            </div>
                        </div>
                    )}/>
                    <Route path={`${this.props.match.url}/:id`} component={ArticleDetail}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        getArticles: function (page, limit) {
            dispatch(getArticleList(page, limit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)