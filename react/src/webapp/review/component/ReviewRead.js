import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import { getReviewRead, getReviewDelete, getReviewList  } from '../reducer/review.reducer';

const ReviewRead = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const review = useSelector(state =>{
        return state.reviews.params;
    })


    const fetchRead =()=>{
        dispatch(getReviewRead(params.reviewId))
    }

    useEffect(() => {
        fetchRead()
    },[])

    const deletes = async(reviewId)=>{
        if(window.confirm("정말 삭제하시겠습니까?"))
        await dispatch(getReviewDelete(reviewId))
        await dispatch(getReviewList(1))
    }

    return (
        <div>
            <div className = "card col-md-6 offset-md-3">
                <h3 className ="text-center"> Read Detail</h3>
                    <div className = "row">      
                            <label> * NO </label>
                            <textarea style={{color:"black"}} value={params.reviewId} name="reviewId" readOnly></textarea> 
                        </div>
                       <div className = "row">      
                            <label> * Title </label>
                            <textarea style={{color:"black"}} value={review.title} name="title" readOnly></textarea> 
                        </div>
                        <div className = "row">      
                            <label> * Content </label>
                            <textarea style={{color:"black"}} value={review.content} name="content" readOnly></textarea> 
                        </div>

                        {/* <div className = "row">
                            <label> Comment </label> : <br></br>
                            <textarea name="content" value={read.comment} onChange={onChange} readOnly/> 
                        </div > */}

                        <Link to="/reviews/review_list">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}}>나가기</button></Link>
                        <Link to={`/reviews/review_modify/${params.reviewId}`}>
                        <button className="btn btn-primary" style={{marginLeft:"10px"}}>수정하기</button></Link>
                        <Link to="/reviews/review_list">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={()=> deletes(params.reviewId)}>삭제하기</button></Link>
                </div>
            </div>

    );
}



export default ReviewRead