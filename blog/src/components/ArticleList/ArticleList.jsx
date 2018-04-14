import React, { Component } from 'react'
import Item from './Item/Item'
import './style.scss'
import WithLoading from '../WithLoading/WithLoading'

class ArticleList extends Component {
    render() {
        const className = this.props.className || ''
        return (
            <div className={`ui-article-list ${className}`}>
                {
                    this.props.list.map(function (item) {
                        return <Item data={item} key={item.id}/>
                    })
                }
            </div>
        )
    }
}

export default WithLoading(ArticleList)