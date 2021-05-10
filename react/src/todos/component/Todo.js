import React from 'react'
import { useDispatch } from 'react-redux'

const Todo=({todo, delTodo, toggleTodo})=>{

const dispatch = useDispatch()
    const ondelete=()=>{
        alert(`${todo.id}+를+삭제`)
        dispatch(delTodo(todo.id))
    }

    const toggleClick=()=>{
        alert(`체크박스 체크 됨 id : ${todo.id}`)
        dispatch(toggleTodo(todo.id))
    }

    return(<>
    <div style={{width:600}}>
        <input onClick={toggleClick} type="checkbox" style={{width:100}}/>
        <span style={{width: 400}}>{(todo.done) ? <del>{todo.text}</del> : <span>{todo.text}</span>}</span>
        <button onClick={ondelete} style={{width:100, backgroundColor:'red'}}>삭제</button>
    </div>
    </>)

}

export default Todo