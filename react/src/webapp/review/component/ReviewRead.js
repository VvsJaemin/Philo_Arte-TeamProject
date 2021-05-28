import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import { ReplyList } from 'webapp/reply';
import { getReplyDelete } from 'webapp/reply/reducer/reply.reducer';
import { getReviewRead, getReviewDelete, getReviewList, currentReview  } from '../reducer/review.reducer';

const ReviewRead = () => {
   
    const params = useParams()
    console.log(params)
    const dispatch = useDispatch()

    const reviewObj = useSelector(currentReview)
    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }

    const fetchRead =()=>{
        dispatch(getReviewRead(params.reviewId))
        setFlag(!flag)
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
        <div className ="container">
            <div className = "card col-md-8 offset-md-3">
                <h3 className ="text-center"> Read Detail</h3>
                    <div className = "mb-3">      
                            <label className="form-label"> * NO </label>
                            <textarea className="form-control"  rows="1" style={{color:"black"}} value={params.reviewId} name="reviewId" readOnly></textarea> 
                        </div>
                       <div className = "mb-3">      
                            <label className="form-label"> * Title </label>
                            <textarea className="form-control"  rows="5" style={{color:"black"}} value={reviewObj.title} name="title" readOnly></textarea> 
                        </div>
                        <div className = "mb-3">      
                            <label className="form-label"> * Content </label>
                            <textarea className="form-control"  rows="5" style={{color:"black"}} value={reviewObj.content} name="content" readOnly></textarea> 
                        </div>
                        <div className = "mb-3">      
                            <label  className="form-label"> * writerName </label>
                            <textarea className="form-control" rows="1" style={{color:"black"}} value={reviewObj.writerName} name="writerName" readOnly></textarea> 
                        </div>

                        {/* <div className = "row">
                            <label> Comment </label> : <br></br>
                            <textarea name="content" value={read.comment} onChange={onChange} readOnly/> 
                        </div > */}
                        <Link to="/reviews/review_list">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}}>리뷰 목록</button></Link>
                        <Link to={`/reviews/review_modify/${params.reviewId}`}>
                        <button className="btn btn-success pull-right" style={{marginLeft:"10px"}}>수정하기</button></Link>
                        <Link to="/reviews/review_list">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={()=> deletes(params.reviewId)}>삭제하기</button></Link>
                        <ReplyList reviewId={params.reviewId} changeFlag = {changeFlag} flag={flag}></ReplyList>
                </div> 
            </div>

    );
}



export default ReviewRead