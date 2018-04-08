import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Item extends Component {
    render () {
        const data = this.props.data
        return (
            <div className="ui-article-item">
                <h3 className="item-title">{data.title}</h3>
                <div className="item-info">
                    <span>post @ {data.update_time}</span>
                    <span>category: {data.category}</span>
                </div>
                <p className="item-content">
                    {data.abstract}
                </p>
                <Link to={`/article/${data.article_id}`} href="javascript:void(0)" className="item-link" >阅读全文&gt;&gt;</Link>
            </div>
        )
    }
}