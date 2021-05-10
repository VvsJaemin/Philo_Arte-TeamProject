import {createSlice} from '@reduxjs/toolkit'
import uuid from 'uuid/v4'

const initialState =[
    {id : 1, text: '리액트 학습', done : true},
    {id :2 , text : '리덕스 학습', done :true},
    {id : 3, text : '썽크 학습', done : false}
]

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers:{
        addTodo(state, {payload}){
            state.push({id :uuid(), text:payload, done : false})
        },
        delTodo(state, {payload}){
            alert(`리듀서 내부 삭제 : ${payload}`)
            return state.filter((todo)=>todo.id!==payload)}, // function 구조(파라미터, 리턴 구조)

            // state.splice(state.findIndex(todo=>todo.id===payload),1)

            delTodos(state, {payload}){
             alert(`전체 삭제 : ${JSON.stringify(payload)}`)
             state.splice(payload)
            },

            toggleTodo(state, {payload}){
                alert(`리듀서내부  :  + ${payload}`)
                const toggle = state.find((todo)=>todo.id===payload)
                toggle.done=!toggle.done
            }
            

        }

})
// alert(JSON.stringify(todoReducer))
const {actions, reducer} = todoSlice
export const {addTodo, delTodo, delTodos, toggleTodo} = actions
export default reducer