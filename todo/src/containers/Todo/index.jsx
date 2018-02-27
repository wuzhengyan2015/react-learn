import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, filterTodo } from '../../reducers/index'
import '../../assets/style.scss'
import TodoList from '../../components/Todo/index'

const filters = [
    { value: 'all', text: '全部' },
    { value: 'active', text: '待完成' },
    { value: 'completed', text: '已完成' },
]

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addText: ''
        }
        this.addTodoItem = this.addTodoItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    componentDidMount() {
        this.props.addTodo({ task: 'create my todo', completed: false })
    }
    addTodoItem() {
        if (this.state.addText !== '') {
            this.props.addTodo({ task: this.state.addText, completed: false })
            this.setState({
                addText: ''
            })
        }
    }
    handleChange(e) {
        this.setState({
            addText: e.target.value
        })
    }
    handleKeyPress(e){
        if(e.charCode === 13){
            this.addTodoItem()
            e.target.blur()
        }
    }
    changeFilter(filter) {
        this.props.changeFilter(filter)
    }
    filterTodos() {
        if (this.props.filter === 'all') {
            return this.props.todos
        } else if (this.props.filter === 'active') {
            return this.props.todos.filter(function (item) {
                return !item.completed
            })
        } else {
            return this.props.todos.filter(function (item) {
                return item.completed
            })
        }
    }
    render() {
        const _this = this
        return (
            <div className="todo-app">
                <h2 className="todo-title">Todo</h2>
                <div className="todo-add">
                    <input type="text" className="todo-add-input" value={this.state.addText} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                    <a href="javascript:void(0);" className="todo-add-btn" onClick={this.addTodoItem}>Add</a>
                </div>
                <div className="todo-list">
                    <TodoList list={this.filterTodos()} toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo}/>
                </div>
                <ul className="nav nav-pills clearfix">
                    {
                        filters.map(function (item, index) {
                            return <li key={index} className={_this.props.filter == item.value ? 'active' : null} onClick={_this.changeFilter.bind(_this, item.value)}><a>{item.text}</a></li>
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
        changeFilter: (data) => {
            dispatch(filterTodo(data))
        },
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)