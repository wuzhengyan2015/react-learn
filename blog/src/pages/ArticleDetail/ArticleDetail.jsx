import React, {Component} from 'react'
import marked from 'marked'

class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: null
        }
    }
    componentDidMount () {
        fetch(`/api/article_detail/${this.props.match.params.id}`).then(response => {
            return response.json()
        }).then((json) => {
            this.setState({
                article: json
            })
        })
    }
    render () {
        return (
            <div>
                {
                    !this.state.article ? 
                    <div>loading...</div>
                    : <div><div className="article-detail-header">{this.state.article.title}</div>
                    {
                        this.state.article && <div dangerouslySetInnerHTML={{__html: marked(this.state.article.body)}}></div>
                    }
                    </div>
                }
            </div>
        )
    }
}

export default ArticleDetail