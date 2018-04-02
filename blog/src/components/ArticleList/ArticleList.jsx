import React, { Component } from 'react'
import Item from './Item/Item'
import './style.scss'

export default class ArticleList extends Component {
    render() {
        return (
            <div className="ui-article-list">
                {
                    this.props.list.map(function (item) {
                        return <Item data={item} key={item.id}/>
                    })
                }
            </div>
        )
    }
}