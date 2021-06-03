import React, { useEffect } from 'react'
import Icofont from 'react-icofont';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList, getReviewRead } from 'webapp/review/reducer/review.reducer';
import {ReviewSearch} from '..';


const ReviewList = () => {
    const pageResult= useSelector(state=>state.reviews.pageResult)

    const page = pageResult.page

    const dispatch = useDispatch()

    const reviews = useSelector(state =>{

        return state.reviews.pageResult.dtoList; 
    })

    const msg = useSelector(state => {
        return state.reviews.msg
    })

     const selectContent = (reviewId) => {
        dispatch(getReviewRead(reviewId))
    }

    useEffect((e) => {
        dispatch(getReviewList(page))
    },[])


    return (
        <>
        <section className="white-bg">
        <h1>{msg}</h1>
        <h2 className="text-center"style={{marginBottom:"50px"}}>Community</h2>
         <div className="container">
         < Link to = "/" >
         <button className="btn btn-success">집<Icofont icon="icofont-home" /></button></Link>
         < Link to = "/reviews/review_register"> 
        <button className="btn btn-success pull-right">리뷰 등록</button></Link><br></br><br></br>
        <ReviewSearch></ReviewSearch>
             {reviews.map((review, reviewId)=>{
                 return(
                    <ul className="comment-box">
                    <li className ="post-comment" key={review.reviewId}>
                        <div className="comment-content">
                            <div className="post-body">
                                <div className="comment-header">
                                    <span className="writerName">
                                        {review.writerName}
                                    </span>
                                   <span className="pull-right">
                                       {review.regDate}
                                   </span>
                                </div>
                                <div className="post-message">
                                  {review.title}
                                </div>  
                                <div className="comment-footer">
                                </div>
                            </div>
                                    < Link to ={`/reviews/review_read/${review.reviewId}`}> 
                                  <button onClick={()=>selectContent(review.reviewId)} className="btn btn-success" style={{marginLeft : "970px"}}>자세히 보기</button></Link>
                        </div>
                    </li>
                </ul>
                 )
             })}
    </div>
    <br/>
    </section>
</>

    )
        }

export default ReviewList