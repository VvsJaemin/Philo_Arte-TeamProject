import { useDispatch } from 'react-redux'
import React from 'react'
import { Todo } from 'todos/index'
const Todos = ({ todos, delTodo, delTodos, toggleTodo }) => { 
    
    const dispatch = useDispatch()
    const alldelete = () => {
        
        dispatch(delTodos(0))
    }    

    return (<>
    <h3>할일 목록</h3>
    <button onClick={alldelete} style={{width:100}}>전체 삭제</button>
    <div>
        {todos.map(todo=>(<Todo key={todo.id} todo={todo} delTodo={delTodo} delTodos={delTodos} toggleTodo={toggleTodo}/>))}
    </div>
    </>)
}
export default Todos