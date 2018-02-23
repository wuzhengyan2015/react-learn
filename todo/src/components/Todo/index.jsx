import React, {Component} from 'react'
import Item from './Item/index'

export default class TodoList extends Component {
    render () {
        return (
            <ul className="list-group">
                {
                    this.props.list.map(function(item, index){
                        return <Item text={item.task} key={index}/>
                    })
                }
            </ul>
        )
    }
}