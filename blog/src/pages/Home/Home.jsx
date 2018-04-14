import React, { Component } from 'react'
import { Carousel } from 'antd'
import './style.scss'
import ArticleList from '../../components/ArticleList/ArticleList'
import {getArticleList} from '../../redux/actions/article'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Home extends Component {
    componentDidMount () {
        this.props.getArticles()
    }
    render() {
        const list = (this.props.articles && this.props.articles.body) || []
        return (
            <div>
                <div className="home-carousel-wrapper">
                    <Carousel autoplay>
                        <div><img src={require('./images/1.jpg')} alt="" /></div>
                        <div><img src={require('./images/2.jpg')} alt="" /></div>
                        <div><img src={require('./images/3.jpg')} alt="" /></div>
                        <div><img src={require('./images/4.jpg')} alt="" /></div>
                    </Carousel>
                </div>
                <ArticleList isLoading={this.props.articles.isPending} list={list}/>
                {   
                    list.length !== 0 && <Link className="btn-show-all" to="/article">查看全部文章</Link>
                }
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        getArticles: function(){
            dispatch(getArticleList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)