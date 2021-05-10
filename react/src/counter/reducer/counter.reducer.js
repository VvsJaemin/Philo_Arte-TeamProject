import {createAction, handleActions} from 'redux-actions'

const INCREASE ='counter/INCREASE'
const DECREASE ='counter/DECREASE' 

export const increase =createAction("INCREASE")
export const decrease =createAction("DECREASE") // 액션

const initialState = {number : 0} // 스테이트

const counterReducer = handleActions({
   [ INCREASE ] : (state, action)=>({number : state.number+1}),
   [ DECREASE]: (state, action)=>({number : state.number-1})
}, initialState)  // 리듀서  - 스토어의 기능, 하나만 존재 [INCREASER] 만의 기능을 만든다. 


export default counterReducer
// 전체는 스토어 