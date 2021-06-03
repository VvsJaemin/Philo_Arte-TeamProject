import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import Slider from 'react-slick';
import { ReplyList } from 'webapp/reply';
import { getReviewRead, getReviewDelete, getReviewList, currentReview  } from '../reducer/review.reducer';

const ReviewRead = () => {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0",
        className: "blog-grid-slider slick",
      };
    const reviewObj = useSelector(state=>{
        return state.reviews.params
    })
    

    const reviewFile = reviewObj.reviewFileDtoList

    const params = useParams() // useParams는 해당하는 상태의 pk 값을 가져온다. 

    const dispatch = useDispatch()

    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }

    const fetchRead =()=>{
        dispatch(getReviewRead(params.reviewId))
      
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
            <div className ="container" >
            <div className="display-flex" style={{marginTop:"100px"}}>
                            <>
                        { reviewFile && reviewFile[0] ? reviewFile.map((file,i)=>{
                                return(
                                    <div key={file.uuid}> <img style={{marginLeft:"30px"}} src={"http://localhost:8080/review_files/display?imgName="+"s_"+file.uuid+file.imgName}/>
                                      </div>
                                )
                            }) :<></>}
                               </>
                        </div>            
            <div className="post-info all-padding-20">
                <h2>{reviewObj.title}</h2><h3 className="pull-right">{reviewObj.writerName}</h3>
                <br></br>
                <blockquote>
                    <p>
                    {reviewObj.content}
                    </p>
                    <p>{reviewObj.regDate}</p>
                  </blockquote>
            </div>
            <div className="post" style={{marginBottom:"100px"}}>
                <div className="post-tags pull-right" >
                <Link to={`/reviews/review_modify/${params.reviewId}`}>
                        <div>Modify</div></Link>
                </div>
                <div className="post-tags pull-left">
                <Link to="/reviews/review_list">
                        Review List</Link>
                        <Link to="/reviews/review_list">
                        <div onClick={()=> deletes(params.reviewId)}>Review Remove</div></Link>
                </div>
                <div className="post-tags text-center">
                < Link className="pull-right" to = "/replies/reply_register">댓글등록</Link>
                </div>
                    </div>
                        </div>
                        <ReplyList reviewId={params.reviewId} changeFlag = {changeFlag} flag={flag}></ReplyList>
                            </div> 
                            
            

    );
}



export default ReviewRead