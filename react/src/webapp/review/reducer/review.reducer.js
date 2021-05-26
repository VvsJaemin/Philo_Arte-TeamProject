import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { useHistory } from 'react-router'
import {ReviewService} from 'webapp/review/index'

export const getReviewList = createAsyncThunk("reviews/list",
async(page)=>{
    const response = await ReviewService.list(page)
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
        const response = await ReviewService.deletes(reviewId)
        return response.data
    }
 )

 const isRejectAction=action=>(action.type.endsWith('rejected'))

 const reviewSlice = createSlice({
     name : 'reviews',
     initialState : {
        msg:'',
        pageResult :{
            dtoList:[],
            page: 1,
            pageList:[],
            start : 1,
            end : 1,
            prev:false,
            next:false
        
        },
        params:{}
     },
     reducers : {},
     extraReducers : (builder)=>{
         builder.addCase(getReviewList.fulfilled,(state, {meta,payload})=>{
            state.pageResult = payload;
         })
         .addCase(getReviewRegister.fulfilled, (state, {payload})=>{
             const msg = '' +payload +"번 등록"
             return {...state, msg }
         })
         .addCase(getReviewRead.fulfilled, (state, {payload})=>{
           state.params = payload
         })
         .addCase(getReviewModify.fulfilled,(state, {payload})=>{
            state.params = payload
         })
         .addCase(getReviewDelete.fulfilled,(state, {payload})=>{
            state.params = payload
         })

         .addMatcher(isRejectAction,()=>{})
         .addDefaultCase((state, payload)=>{})
     }
 })

const{actions, reducer} =reviewSlice
export const {}=actions
export default reducer