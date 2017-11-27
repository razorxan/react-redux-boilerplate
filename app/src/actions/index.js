import { setTimeout } from "timers";


export function addTodo (payload) {
    return {
        type: 'ADD_TODO',
        payload
    }
}

export function addTodoAsync (payload) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'ADD_TODO',
                payload
            })
        }, 500)
    }
}

export function removeTodoAsync (payload) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_TODO',
                payload
            })
        }, 1000)
    }
}

export function removeTodo (payload) {
    return {
        type: 'REMOVE_TODO',
        payload
    }
}

export function setTodo (payload) {
    return {
        type: 'SET_TODO',
        payload
    }
}