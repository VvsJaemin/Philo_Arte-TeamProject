import React from 'react'
import 'todos/style/TodoStyle.css'
import { useSelector } from 'react-redux'
import {AddTodo, Todos} from "todos/index"
import {addTodo, delTodo, delTodos, toggleTodo} from 'todos/reducer/todo.reducer'

const TodoApp =()=>{

    const todos = useSelector(state=>(state.todos))

    alert(`useSelector :` + JSON.stringify(todos))

    return(<div className="container todo">
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} delTodo={delTodo} delTodos={delTodos} toggleTodo={toggleTodo}/>
    </div>)

}

export default TodoApp
