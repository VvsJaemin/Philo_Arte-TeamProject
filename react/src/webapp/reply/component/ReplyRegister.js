import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { currentReview, getReviewRegister } from 'webapp/review/reducer/review.reducer'
import { getReplyRegister } from '../reducer/reply.reducer'

const ReplyRegister=()=>{
    const reviewObj = useSelector(currentReview)
  
    const replies = useSelector(state =>{
        return state.replies.replies;
    })

    const [input, setInput] = useState({
        text : '',
        replyer : '',
        reviewId:reviewObj.reviewId
    })

    const dispatch = useDispatch()

    const history = useHistory()

    const handleSubmit = useCallback(e => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name] : value
        })
    },[input])

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">댓글을 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> text </label>
                                    <input type="text" placeholder="댓글 내용을 입력해주세요" name="text" className="form-control" 
                                    value={input.text} onChange={handleSubmit}/>
                                </div>
                                <div className = "form-group">
                                    <label> nickname  </label>
                                    <input type='text' placeholder="닉네임을 입력해주세요" name="replyer" className="form-control" 
                                    value={input.replyer} onChange={handleSubmit}/>
                                </div>
                                <div className = "form-group">
                                    <label> 리뷰 게시판 번호  </label>
                                    <input placeholder="게시판 번호를 입력해주세요" name="reviewId" className="form-control" 
                                    value={input.reviewId} onChange={handleSubmit}/>
                                </div>
                                <button className="btn btn-success" onClick={()=>dispatch(getReplyRegister(input), history.replace(`/reviews/review_read/${input.reviewId}`))}>등록</button>

                            <Link to ={`/reviews/review_read/${reviewObj.reviewId}`}>
                                <button className="btn btn-danger" 
                                style={{marginLeft:"10px"}}>취소</button>
                            </Link>
                                {/* <button className="btn btn-danger" onClick="/" style={{marginLeft:"10px"}}>취소</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ReplyRegister