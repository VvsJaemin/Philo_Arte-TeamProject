import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import { ReplyList } from 'webapp/reply';
import { getReplyDelete } from 'webapp/reply/reducer/reply.reducer';
import { getReviewRead, getReviewDelete, getReviewList, currentReview  } from '../reducer/review.reducer';

const ReviewRead = ({register}) => {


    const params = useParams() // useParams는 해당하는 상태의 pk 값을 가져온다. 

    const dispatch = useDispatch()

    const reviewObj = useSelector(state=>{
        return state.reviews.params
    })

    const reviewFile = reviewObj.reviewFileDtoList

    console.log(reviewFile)
    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }

    const fetchRead =()=>{
        dispatch(getReviewRead(params.reviewId))
        changeFlag()
    }

    useEffect(() => {
        fetchRead()
    },[])

    const deletes = async(reviewId)=>{
        let deleteResult = window.confirm("정말 삭제하시겠습니까?")
        if(deleteResult){
            await dispatch(getReviewDelete(reviewId))
            await dispatch(getReviewList(1))
        }else{
            window.location.reload()
        }
    }

    return (
        <div>
            <div className ="container">
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
                         <div className="display-flex">
                            <>
                        {reviewFile?.map(file=>{
                                return(
                                    <div key={file.uuid}> <img src={"http://localhost:8080/review_files/display?imgName="+file.uuid+"_"+file.imgName}/>
                                      </div>
                                )
                            })}
                               </>
                        </div> 
                      

                        <Link to="/reviews/review_list">
                        <button className="btn btn-primary pull-left">리뷰 목록</button></Link>
                        <Link to={`/reviews/review_modify/${params.reviewId}`}>
                        <button className="btn btn-success pull-right" style={{marginLeft:"10px"}}>리뷰수정</button></Link>
                        <Link to="/reviews/review_list">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={()=> deletes(params.reviewId)}>리뷰 삭제</button></Link>
                        <ReplyList reviewId={params.reviewId} changeFlag = {changeFlag} flag={flag}></ReplyList>
                </div> 
            </div>

    );
}



export default ReviewRead