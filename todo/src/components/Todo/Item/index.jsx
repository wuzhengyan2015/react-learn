import React, {Component} from 'react'

export default class TodoItem extends Component {
    render () {
        return (
            <li className="list-group-item">
                <span>{this.props.todo.task}</span>
                {this.props.todo.completed ? <a className="todo-item-btn" href="javascript:void(0);" onClick={this.props.unfinishTodo}>unfinish</a>
                : <a className="todo-item-btn" href="javascript:void(0);" onClick={this.props.finishTodo}>finish</a>}
            </li>
        )
    }
}