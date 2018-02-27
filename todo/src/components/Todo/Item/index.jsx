import React, {Component} from 'react'

export default class TodoItem extends Component {
    render () {
        let itemClass = 'list-group-item'
        this.props.todo.completed && (itemClass += ' completed')
        return (
            <li className={itemClass}>
                <span>{this.props.todo.task}</span>
                <a className="todo-item-btn" href="javascript:void(0);" onClick={this.props.toggleTodo}></a>
                <a className="todo-delete-btn" href="javascript:void(0);" onClick={this.props.deleteTodo}>D</a>
            </li>
        )
    }
}