import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTodo, filterTodo} from '../../reducers/index'
import '../../assets/style.scss'
import TodoList from '../../components/Todo/index'

const filters = [
    {value: 'all', text: '全部'},
    {value: 'unaccomplish', text: '待完成'},
    {value: 'accomplish', text: '已完成'},
]

class Todo extends Component {
    constructor (props) {
        super(props)
        this.addTodoItem = this.addTodoItem.bind(this)
    }
    componentDidMount () {
        this.props.addTodo({task: 'create my todo', completed: false})
    }
    addTodoItem () {
        if(this.textInput.value !== ''){
            this.props.addTodo({task: this.textInput.value, completed: false})
            this.textInput.value = ''
        }
    }
    filterTodo (filter) {
        this.props.filterTodo(filter)
    }
    render() {
        const _this = this
        return (
            <div className="todo-app">
                <h2 className="todo-title">Todo</h2>
                <div className="todo-add">
                    <input type="text" className="todo-add-input" ref={(input) => { this.textInput = input; }}/>
                    <a href="javascript:void(0);" className="todo-add-btn" onClick={this.addTodoItem}>Add</a>
                </div>
                <div className="todo-list">
                    <TodoList list={this.props.todos}/>
                </div>
                <ul className="nav nav-pills clearfix">
                    {
                        filters.map(function(item, index) {
                            return <li key={index} className={_this.props.filter==item.value?'active':null} onClick={_this.filterTodo.bind(_this, item.value)}><a>{item.text}</a></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (data) => {
            dispatch(addTodo(data))
        },
        filterTodo: (data) => {
            dispatch(filterTodo(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)