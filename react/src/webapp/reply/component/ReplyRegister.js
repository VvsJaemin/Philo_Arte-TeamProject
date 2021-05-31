import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { currentReview, getReviewRead, getReviewRegister } from 'webapp/review/reducer/review.reducer'
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
    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }
    const dispatch = useDispatch()

    const history = useHistory()
    const fetchRead =()=>{
      dispatch(getReviewRead(reviewObj.reviewId))
  }
    const register =()=>{
      dispatch(getReplyRegister(input))
      history.replace(`/reviews/review_read/${input.reviewId}`)
      fetchRead()
    }

    const handleSubmit = useCallback(e => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name] : value
        })
    },[input])
    
    return (
        <div className = "container">
              <div id="respond" className="comment-respond">
                  <h2 id="reply-title" className="text-center">
                    댓글을 작성해주세요
                  </h2><br></br>
                  <form
                    method="post"
                    id="form-comments"
                    className="comment-form contact-form-style-01"
                  >
                    <div className="row-form row">
                      <div className="col-form col-md-3">
                        <div className="form-group">
                          <input
                            type="text"
                            name="replyer"
                            className="md-input"
                            id="NickName"
                            required=""
                            placeholder="이름을 입력해주세요 *"
                            value={input.replyer}
                            onChange={handleSubmit}
                            data-error="Your NickName is Required"
                          />
                        </div>
                      </div>
                      <div className="col-form col-md-3">
                        <div className="form-group">
                          <input
                            type="text"
                            name="reviewId"
                            className="md-input"
                            id="reviewId"
                            placeholder="reviewId *"
                            value={input.reviewId}
                            onChange={handleSubmit}
                            required=""
                            data-error="Please Enter Valid Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="text"
                        className="md-textarea"
                        id="text"
                        rows="7"
                        placeholder="댓글을 입력해주세요 *"
                        required=""
                        value={input.text}
                        onChange={handleSubmit}
                        data-error="Please, Leave us a message"
                      ></textarea>
                    </div>

                    <p className="form-submit">
                      <button className="btn btn-color btn-md btn-default remove-margin" onClick={register}>
                        댓글 등록
                      </button> 

                        <Link to ={`/reviews/review_read/${reviewObj.reviewId}`}>
                                <button className="btn btn-color btn-md btn-default"
                                style={{marginLeft:"10px"}}>취소</button>
                            </Link>
                    </p>
                  </form>
                </div>
                </div>
        
    );
}

export default ReplyRegister