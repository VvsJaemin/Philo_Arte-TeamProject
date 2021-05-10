import {createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {number : 0},
    reducers: {
        increase: (state, action) => ({number : state.number + action.payload}),
        decrease: (state, action) => ({number : state.number - action.payload})
    }

})

const {actions, reducer} = counterSlice

export const {increase, decrease} = actions

export default reducer