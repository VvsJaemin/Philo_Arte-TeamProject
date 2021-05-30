import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList, getReviewRead } from 'webapp/review/reducer/review.reducer';
import { ReviewSearch } from '..';

const ReviewList = () => {
    const pageResult= useSelector(state=>state.reviews.pageResult)

    const page = pageResult.page

    const pageRequest = useSelector(state=>state.reviews.pageRequest)
    
    const dispatch = useDispatch()

    const reviews = useSelector(state =>{

        return state.reviews.pageResult.dtoList; // 리뷰 목록을 store에서 조회 하여 사용 가능 하게함.
    })

    const msg = useSelector(state => {
        return state.reviews.msg
    })

    console.log(msg)

     const selectContent = (reviewId) => { // 제목에서 클릭 후 리뷰 읽기로 넘어가는 함수(parameter로 reviewId)fh 받고 
                                                        // dispatch로 보냄
        dispatch(getReviewRead(reviewId))
    }

    useEffect((e) => {
        dispatch(getReviewList(page))
          // paging 처리를 위해 렌더링 될 때 리스트의 페이징을 실행하도록 함
    },[])

    return (
        <>
        <h1>{msg}</h1>
        <h3 className="text-center">Review 목록</h3>
        <div className="table">
        </div>
         <div className="container">
             <table className="table table-striped table-bordered table-hover">
                 <thead style={{textAlign :'center'}}>
            <tr>
                <td>No</td>
                <td>제목</td>
                <td>작성자</td>
                <td>등록일 </td>
            </tr>
            </thead>
            <tbody style={{textAlign :'center'}}>
             {reviews.map((review, reviewId) => {
                    return (
                        <tr key={review.reviewId}>
                            <td>{review.reviewId}</td>
                            <td onClick={()=>selectContent(review.reviewId)}><Link to={`/reviews/review_read/${review.reviewId}`}>{review.title}</Link></td>
                            <td>{review.writerName}</td>
                            <td>{review.regDate}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
            <ReviewSearch pageRequest={pageRequest} />

         < Link to = "/" >
         <button className="btn btn-success">홈으로</button></Link>
            < Link to = "/reviews/review_register"> 
        <button className="btn btn-success pull-right">리뷰 등록</button></Link>
            <hr/>
    </div>
    <br/>
</>

    )
        }

export default ReviewList