import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import { getReviewList, getReviewModify } from '../reducer/review.reducer';

const ReviewModify = () => {
    const params = useParams()
    const [update, setUpdate] = useState({})
    const {title, content} = update;

    const review = useSelector(state =>{

        console.log(state.reviews.params)
        return state.reviews.params;
    })
    const page = useSelector(state=>state.reviews.pageResult.page)

    const dispatch = useDispatch()

    const modify = async(reviewId)=>{
        await dispatch(getReviewModify({title:title, content:content, reviewId : params.reviewId}))
        await dispatch(getReviewList(page))
    }

    const handleChange = useCallback(e => {
        const{name, value} = e.target
        setUpdate({...update,
        [name] : value})
    },[update])

    return (
        <> < h1 > ReviewModify</h1>
        
            <div>      
                            <label> * NO </label>
                            <textarea style={{color:"black"}} value={params.reviewId} name="reviewId" readOnly></textarea> 
                        </div>   
          <div>
            <th>제목</th>
            <input style={{color:"black"}} placeholder="제목을 수정하세요" type='text' name='title' value={update.title} onChange={handleChange}></input>
        </div>
        <div>
            <th>내용</th>
            <input style={{color:"black"}} placeholder="내용을 수정하세요" type='text' name='content' value={update.content} onChange={handleChange}></input>
        </div>
        <div>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    <button onClick={()=>modify(params.reviewId)}>수정하기</button>
    < Link to = {`/reviews/review_read/${params.reviewId}`} > <button>뒤로가기</button>
    </Link>
    </div>

</>
    )
}

export default ReviewModify