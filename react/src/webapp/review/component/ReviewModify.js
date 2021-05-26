import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import { getReviewList, getReviewModify, currentReview } from '../reducer/review.reducer';

const ReviewModify = () => {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const reviewObj = useSelector(currentReview)
    const page = useSelector(state=>state.reviews.pageResult.page)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("effect..............")
        setTitle(reviewObj.title)
        setContent(reviewObj.content)
    },[reviewObj])


    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleModify = async (reviewId) => {
        
        const obj = { reviewId: reviewObj.reviewId, title: title,  content: content, writerId: reviewObj.writerId}
        await dispatch(getReviewModify(obj))
        await dispatch(getReviewList(page))

    }

    return (
        <> < h1 >리뷰를 수정하세요</h1>
        
            <div>      
            <label> * NO </label>
            <textarea style={{color:"black"}} value={reviewObj.reviewId} name="reviewId" readOnly></textarea> 
        </div>   
          <div>
            <th>제목</th>
            <input style={{color:"black"}} placeholder="제목을 수정하세요" type='text' name='title' value={title} onChange={(e) => handleChangeTitle(e)}></input>
        </div>
        <div>
            <th>내용</th>
            <input style={{color:"black"}} placeholder="내용을 수정하세요" type='text' name='content' value={content} onChange={(e) => handleChangeContent(e)}></input>
        </div>
        <div className = "row">      
                            <label> * writerName </label>
                            <textarea style={{color:"black"}} value={reviewObj.writerName} name="writerName" readOnly></textarea> 
                        </div>
        <div>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    <button onClick={(e)=>handleModify(e)}>수정하기</button>
    < Link to = {`/reviews/review_read/${reviewObj.reviewId}`} > <button>뒤로가기</button>
    </Link>
    </div>

</>
    )
}

export default ReviewModify