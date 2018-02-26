export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const FILTER_TODO = 'FILTER_TODO'
export const FINISH_TODO = 'FINISH_TODO'
export const UNFINISH_TODO = 'UNFINISH_TODO'
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

export function finishTodo(data) {
    return {
        type: FINISH_TODO,
        data
    }
}

export function filterTodo(data) {
    return {
        type: FILTER_TODO,
        data
    }
}

export function unfinishTodo(data) {
    return {
        type: UNFINISH_TODO,
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
            return state
        case FINISH_TODO:
            let newState = [...state]
            newState[action.data].completed = true
            return newState
        case UNFINISH_TODO:
            let newState2 = [...state]
            newState2[action.data].completed = false
            return newState2
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