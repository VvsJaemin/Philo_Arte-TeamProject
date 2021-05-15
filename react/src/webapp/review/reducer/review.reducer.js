import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {ReviewService} from 'webapp/review/index'

export const getReviewList = createAsyncThunk("reviews/list",
async()=>{
    const response = await ReviewService.list()
    return response.data
})

export const getReviewRegister = createAsyncThunk("reviews/register",
async(input)=>{
    const response = await ReviewService.register(input)
    return response.data
 })

 export const getReviewRead = createAsyncThunk("reviews/read/id",
async()=>{
    const response = await ReviewService.read()
    return response.data
 })

 const isRejectAction=action=>(action.type.endsWith('rejected'))

 const reviewSlice = createSlice({
     name : 'reviews',
     initialState : [],
     reducers : {},
     extraReducers : (builder)=>{
         builder.addCase(getReviewList.fulfilled,(state, {payload})=>{
             return [...payload]
         })
         .addCase(getReviewRegister.fulfilled, (state, {payload})=>{
             return [...payload]
         })
         .addCase(getReviewRead.fulfilled, (state, {payload})=>{
             return[...payload]
         })

         .addMatcher(isRejectAction,()=>{})
         .addDefaultCase((state, payload)=>{})
     }
 })


 const {reducer} = reviewSlice

 export default reducer