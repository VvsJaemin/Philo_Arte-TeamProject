import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList, getReviewRead } from 'webapp/review/reducer/review.reducer';

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
        <h1>{msg}</h1>    
        <h3 className="text-center">Review 목록</h3>
         <div className="row">
             <table className="table table-striped table-bordered">
                 <thead style={{textAlign :'center'}}>
            <tr>
                <td>No</td>
                <td>제목</td>
                <td>작성자</td>
                <td>등록일 </td>
            </tr>
            </thead>
            <tbody style={{textAlign :'center'}}>
             {
                reviews.map((review, reviewId) => {
                    return (
                        <tr key={review.reviewId}>
                            <td>{review.reviewId}</td>
                            <td onClick={()=>selectContent(review.reviewId)}><Link to={`/reviews/review_read/${review.reviewId}`}>{review.title}<bold></bold><bold>[{review.replyCount}]</bold></Link></td>
                            <td>{review.writerName}</td>
                            <td>{review.regDate}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
    </div><br/>
    < Link to = "/" > <button>홈으로</button>
    </Link>
          < Link to = "/reviews/review_register"> <button>리뷰 등록하기</button>
    </Link>
</>
    )
        }

export default ReviewList