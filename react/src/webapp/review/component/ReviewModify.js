import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import { getReviewList, getReviewModify, currentReview } from '../reducer/review.reducer';

const ReviewModify = () => {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const mounted = useRef(false)
    const reviewObj = useSelector(currentReview)

    const dispatch = useDispatch()

    useEffect(() => {
        setTitle(reviewObj.title)
        setContent(reviewObj.content)
        if(!mounted.current){
            mounted.current=true
        }else{

        }
    },[reviewObj])


    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleModify = async (reviewId) => {
        let modifyResult = window.confirm("리뷰를 수정하시겠습니까?")
        const obj = {
             reviewId: reviewObj.reviewId, 
              title: title, 
             content: content, 
             writerId: reviewObj.writerId}
        if(modifyResult){
            alert("리뷰 수정 완료!")
            await dispatch(getReviewModify(obj))
            
        }
    }

    return (
        <>
        <div className="container">
         < h3 className="text-center">리뷰를 수정하세요</h3>
            <div className="row-form row">
                <div className="col-form col-md-3">
                    <div className="form-group">
                    <label> * NO </label>
                    <textarea style={{color:"black"}} value={reviewObj.reviewId} name="reviewId" readOnly></textarea> 
                    </div>
                </div>
            </div>      
            <div className="row-form row">
                <div className="col-form col-md-3">
                    <div className="form-group">
                    <label> * writerName </label>
                    <textarea style={{color:"black"}} value={reviewObj.writerName} name="writerName" readOnly></textarea> 
                    </div>
                </div>
            </div>  
            <div className="form-group">
            <label> * title </label>
              <textarea
                  name="title"
                  style={{color:"black"}}
                  className="md-textarea"
                  id="title"
                  rows="2"
                  placeholder="Your title *"
                  required=""
                  value={title}
                  onChange={(e) => handleChangeTitle(e)}
                  data-error="Please, Leave us a message"
                ></textarea>
                  <label> * content </label>
                <textarea
                  name="content"
                  className="md-textarea"
                  style={{color:"black"}}
                  id="content"
                  rows="7"
                  placeholder="Your contents *"
                  required=""
                  value={content}
                  onChange={(e) => handleChangeContent(e)}
                  data-error="Please, Leave us a message"
                ></textarea>
              </div>
              <button className="btn btn-success pull-right" onClick={(e)=>handleModify(e)}>수정하기</button>
                  < Link to = {`/reviews/review_read/${reviewObj.reviewId}`} > <button className="btn btn-success" >뒤로가기</button>  </Link>
            </div>   
       
</>
    )
}

export default ReviewModify