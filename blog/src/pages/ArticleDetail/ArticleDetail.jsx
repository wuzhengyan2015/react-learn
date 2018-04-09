import React, { Component } from 'react'
import showdown from 'showdown'
import './style.scss'

class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: null
        }
    }
    componentDidMount() {
        fetch(`/api/article_detail/${this.props.match.params.id}`).then(response => {
            return response.json()
        }).then((json) => {
            this.setState({
                article: json
            })
        })
    }
    render() {
        let converter, text, html
        if (this.state.article) {
            converter = new showdown.Converter(),
                text = this.state.article.body,
                html = converter.makeHtml(text);
            console.log(html)
        }
        return (
            <div>
                {
                    !this.state.article ?
                        <div>loading...</div>
                        : <div>
                            <div className="article-detail-header">
                                <h3>{this.state.article.title}</h3>
                            </div>
                            <div className="article-detail-tags">
                                <span>Last Modified :  {this.state.article.update_time}</span>
                                <span>{this.state.article.category}</span>
                            </div>
                            <div className="article-detail-body">
                                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default ArticleDetail