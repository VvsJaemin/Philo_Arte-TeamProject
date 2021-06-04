import React, { useEffect } from 'react'
import Icofont from 'react-icofont';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList, getReviewRead } from 'webapp/review/reducer/review.reducer';
import {ReviewPageList, ReviewSearch} from '..';


const ReviewList = () => {
    const pageResult= useSelector(state=>state.reviews.pageResult)

    const page = pageResult.page

    const dispatch = useDispatch()

    const reviews = useSelector(state =>{

        return state.reviews.pageResult.dtoList; 
    })
    const reviewObj = useSelector(state=>{
        return state.reviews.params
    })
    
    const reviewFile = reviewObj.reviewFileDtoList

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
            <div className="col-md-12">
        <div className="section-title text-center">
        <h1>다양한 리뷰를 보세요 </h1>
                       </div>    </div> <hr className="center_line default-bg"/>
            {reviews.map((review, reviewId)=>{
                return(
                    <div className="row" style={{}}>
                    <div className="col-md-12">
                    <div className="container" >
                   <div className="row mt-10">
                    <div className="col-md-4 pricing-table col-sm-4">
                        <div className="pricing-box ">
                            <h3 className="dark-color mb-0"style={{marginBottom:"50px"}}>{review.title}</h3>
                            <h5 className="dark-color mb-0">By&nbsp;{review.writerName}</h5>
                            <h5 className="dark-color" style={{marginTop:"50px"}}>{review.regDate}</h5>
                        </div><br></br>
                        <div className="pricing-box-bottom">
                            <Link to ={`/reviews/review_read/${review.reviewId}`} className="btn btn-lg btn-square full-width btn-color">더 보기</Link>
                        </div>
                    </div>
                      </div>
                    </div>
                    </div>
                        </div>

                )
            })}

            



        <h1>{msg}</h1>
        <h2 className="text-center"style={{marginBottom:"50px"}}>Community</h2>
         <div className="container">
             <div className="post-tags pull-left">
             < Link to = "/" ><Icofont icon="icofont-home"/>&nbsp;Home</ Link>
             </div>
             <div className="post-tags pull-right">
             < Link to = "/reviews/review_register">Register</ Link>
             </div><br></br>
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
                                   <p className="pull-right">
                                       {review.regDate}
                                   </p>
                                </div>
                                <div className="post-message">
                                  {review.title}
                                </div>  
                                <div className="comment-footer">
                                </div>
                            </div>
                            <div className="post-tags" style={{marginLeft : "990px"}}>
                            < Link to ={`/reviews/review_read/${review.reviewId}`}><div>Read</div> </ Link>
                            </div>
                        </div>
                    </li>
                </ul>
                 )
             })}
    </div>
    <br/>
    <ReviewPageList></ReviewPageList>
    </section>
</>

    )
        }

export default ReviewList