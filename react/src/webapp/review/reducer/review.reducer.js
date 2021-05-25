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
async(reviewId)=>{
    const response = await ReviewService.read(reviewId)
    return response.data
 })

 export const getReviewModify = createAsyncThunk('reviews/modify/reviewId',
    async(reviewId,{writer, content})=>{
        const response = await ReviewService.modify({writer, content})
        return response.data
    }
 )

 export const getReviewDelete = createAsyncThunk('reviews/delete/reviewId',
    async(reviewId)=>{
        const response = await ReviewService.reviewDelete(reviewId)
        return reviewId
    }
 )

 const isRejectAction=action=>(action.type.endsWith('rejected'))

 const reviewSlice = createSlice({
     name : 'reviews',
     initialState : {
        dtoList: [],
        msg:''
     },
     reducers : {},
     extraReducers : (builder)=>{
         builder.addCase(getReviewList.fulfilled,(state, {payload})=>{
            state.dtoList = payload.dtoList;
         })
         .addCase(getReviewRegister.fulfilled, (state, {payload})=>{
             const msg = '' +payload +"번 등록"
             return {...state, msg }
         })
         .addCase(getReviewRead.fulfilled, (state, {payload:reviewId})=>{
             const review = state.find(review=> review.reviewId==reviewId)
            return {...state, review}
         })
         .addCase(getReviewModify.fulfilled,(state, {payload})=>{
             return[...payload]
         })
         .addCase(getReviewDelete.fulfilled,(state, {payload})=>{
             state.filter((review)=>review.reviewId!==payload)
         })

         .addMatcher(isRejectAction,()=>{})
         .addDefaultCase((state, payload)=>{})
     }
 })


 export const {reducer} = reviewSlice

 export default reducer