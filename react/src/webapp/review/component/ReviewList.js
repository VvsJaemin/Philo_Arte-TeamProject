import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList } from '../reducer/review.reducer';

const ReviewList = () => {

    const reviews = useSelector(state =>{
        console.log("state : " + JSON.stringify(state.reviews))
        return state.reviews
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviewList())
    },[])

    return (
        <>    
        
        <h2 className="text-center">Review 목록</h2>
         <div className="row">
             <table className="table table-striped table-bordered">
                 <thead>
            <tr>
                <td>No</td>
                <td>제목</td>
                <td>글쓴이</td>
                <td>등록일</td>
                <td>좋아요</td>
            </tr>
            </thead>
            <tbody>
             {
                reviews.map((review, reviewId) => {
                    return (
                        <tr key={reviewId}>
                            <td>{reviewId+1}</td>
                            <td>{review.title}</td>
                            <td>{review.writer}</td>
                            <td>{new Date(review.regDate).toLocaleDateString()}</td>
                            <td>{review.likeCnt}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
    </div><br/>
    < Link to = "/" > <button>홈으로</button>
    </Link>
          < Link to = "/reviews/review_register" > <button>리뷰 등록하기</button>
    </Link>
</>
    )
        }

export default ReviewList