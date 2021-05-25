import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList, getReviewRead } from 'webapp/review/reducer/review.reducer';

const ReviewList = () => {


    const dispatch = useDispatch()

    const reviews = useSelector(state =>{
        return state.reviews.dtoList;
    })

    const msg = useSelector(state => {
        return state.reviews.msg
    })



     const selectContent = (id) => {
        dispatch(getReviewRead(id))
    }

    useEffect(() => {
        dispatch(getReviewList())
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
                <td>내용</td>
                <td>등록일</td>
                <td>작성자 </td>
            </tr>
            </thead>
            <tbody style={{textAlign :'center'}}>
             {
                reviews.map((review, reviewId) => {
                    return (
                        <tr key={reviewId}>
                            <td>{reviewId+1}</td>
                            <td onClick={()=>selectContent(reviewId+1)}><Link to={`/reviews/review_read/${reviewId+1}`}>{review.title}{review.replyCount}</Link></td>
                            <td>{review.content}</td>
                            <td>{review.regDate}</td>
                            <td>{review.writerName}</td>
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