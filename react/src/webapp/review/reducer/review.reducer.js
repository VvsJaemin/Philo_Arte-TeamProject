import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { useHistory } from 'react-router'
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

 export const getReviewRead = createAsyncThunk(`reviews/read`,
async(id)=>{
    const response = await ReviewService.read(id)
    return response.data
 })

 export const getReviewModify = createAsyncThunk('reviews/modify/tite',
    async({writer, content})=>{
        const response = await ReviewService.modify({writer, content})
        return response.data
    }
 )

 export const getReviewDelete = createAsyncThunk('reviews/delete/id',
    async(id)=>{
        const response = await ReviewService.reviewDelete(id)
        return id
    }
 )

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
             const review = state.find(review=> review.id===payload)
            return review
         })
         .addCase(getReviewModify.fulfilled,(state, {payload})=>{
             return[...payload]
         })
         .addCase(getReviewDelete.fulfilled,(state, {payload})=>{
             state.filter((review)=>review.id!==payload)
         })

         .addMatcher(isRejectAction,()=>{})
         .addDefaultCase((state, payload)=>{})
     }
 })


 const {reducer} = reviewSlice

 export default reducer