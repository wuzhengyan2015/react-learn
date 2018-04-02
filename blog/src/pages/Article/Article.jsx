import React, {Component} from 'react'
import { Pagination } from 'antd';
import {connect} from 'react-redux'
import {getArticleList} from '../../redux/actions/article'
import ArticleList from '../../components/ArticleList/ArticleList'

class Article extends Component {
    constructor (props) {
        super(props)
        this.state = {
            current: 1
        }
        this.pageChangeHandler = this.pageChangeHandler.bind(this)
    }
    componentDidMount () {
        this.props.getArticles(this.state.current)
    }
    pageChangeHandler (page) {
        this.setState({
            current: page
        })
        this.props.getArticles(page)
    }
    render () {
        const list = (this.props.articles && this.props.articles.body) || []
        return (
            <div>
                {
                    this.props.articles.isPending 
                    ? <div>Loading...</div> 
                    : <ArticleList list={list} className="margin-top-0"/>
                }
                <Pagination onChange={this.pageChangeHandler} current={this.state.current} defaultCurrent={1} defaultPageSize={4} total={6} />
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