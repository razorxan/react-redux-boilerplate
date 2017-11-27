const initial_state = []

export default (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
            break;
        case "REMOVE_TODO":
            return state.filter(todo => (todo.id !== action.payload))
            break;
        case "SET_TODO":
            return state.map(todo => ((todo.id === action.payload.id) ? {...todo, checked: action.payload.checked} : todo))
            break;
        default:
            return state
    }
}
