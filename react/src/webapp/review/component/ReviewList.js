import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getReviewList, getReviewRead } from '../reducer/review.reducer';

const ReviewList = () => {

    const reviews = useSelector(state =>{
        return state.reviews
    })

    const dispatch = useDispatch()

     const selectContent = (id) => {
        dispatch(getReviewRead(id))
    }

    useEffect(() => {
        dispatch(getReviewList())
    },[])

    return (
        <>    
        <h3 className="text-center">Review 목록</h3>
         <div className="row">
             <table className="table table-striped table-bordered">
                 <thead style={{textAlign :'center'}}>
            <tr>
                <td>No</td>
                <td>제목</td>
                <td>글쓴이</td>
                <td>등록일</td>
                <td>좋아요</td>
            </tr>
            </thead>
            <tbody style={{textAlign :'center'}}>
             {
                reviews.map((review, id) => {
                    return (
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td onClick={()=>selectContent(id)}><Link to={`/reviews/review_read/${id}`}>{review.title}</Link></td>
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