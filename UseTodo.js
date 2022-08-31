export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)


    // const pendingTodosCount = (todos) => {
    //      setCount(todos.filter)
    // }


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    /*esta func nos va a imprimir en consola la todoq  mandamos con el formulario*/
    const handleNewTodo = (todo) => {
        const action = {
            type: 'ADD TODO',
            payload: todo
        }
        /*llamamos al dispach q le va a mandar la accion al reducer*/
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'REMOVE TODO',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {

        dispatch({
            type: 'TOGGLE TODO',
            payload: id
        })
    }
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }


}