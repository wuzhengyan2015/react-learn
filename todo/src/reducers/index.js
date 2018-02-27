export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const FILTER_TODO = 'FILTER_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo(data) {
    return {
        type: ADD_TODO,
        data
    }
}

export function deleteTodo(data) {
    return {
        type: DELETE_TODO,
        data
    }
}

export function filterTodo(data) {
    return {
        type: FILTER_TODO,
        data
    }
}

export function toggleTodo(data) {
    return {
        type: TOGGLE_TODO,
        data
    }
}


export function todoReducer(state = [{task: '第一个todo', completed: false}], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.data]
        case DELETE_TODO:
            return [...state].filter(function(item){
                return !(item.task == action.data)
            })
        case TOGGLE_TODO:
            return [...state].map(function(item){
                if(item.task == action.data){
                    item.completed = !item.completed
                }
                return item
            })
        default:
            return state;
    }
}

export function visibilityFilter(state = 'all', action) {
    switch (action.type) {
        case FILTER_TODO:
            return action.data
        default:
            return state;
    }
}