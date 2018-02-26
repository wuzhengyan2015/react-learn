import React, {Component} from 'react'
import Item from './Item/index'

export default class TodoList extends Component {
    render () {
        const _this = this
        return (
            <ul className="list-group">
                {
                    this.props.list.map(function(item, index){
                        return <Item todo={item} key={index} finishTodo={() => {_this.props.finishTodo(index)}} unfinishTodo={() => {_this.props.unfinishTodo(index)}}/>
                    })
                }
            </ul>
        )
    }
}