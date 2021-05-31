import React, { useState, useCallback } from 'react'

import {Link, useHistory} from 'react-router-dom';
import { ReviewList } from '..';
import { getReviewRegister } from '../reducer/review.reducer';
import { useDispatch, useSelector } from 'react-redux';
const ReviewRegister = () => {
   
    const reviews = useSelector(state =>{
        return state.reviews.pageResult.dtoList;
    })

    const [input, setInput] = useState({
        title : '',
        content : '',
        writerId : reviews.writerId,
        writerName : reviews.writerName
    })

    const dispatch = useDispatch()

    const register = ()=>{
        alert("등록이 완료 되었습니다.")
        dispatch(getReviewRegister(input))
        history.push('/reviews/review_list')
    }

    const history = useHistory()
    
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
            <h1 id="reply-title" className="comment-reply-title text-center">
              리뷰를 작성해주세요
            </h1>
            <form
              method="post"
              id="form-comments"
              className="comment-form contact-form-style-01"
            >
              <div className="row-form row">
                <div className="col-form col-md-3">
                  <div className="form-group ">
                    <input
                      type="text"
                      name="writerId"
                      className="md-input"
                      id="writerId"
                      required=""
                      placeholder="writerId *"
                      value={input.writerId}
                      onChange={handleSubmit}
                      data-error="Your NickName is Required"
                    />
                  </div>
                </div>
                <div className="col-form col-md-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name="writerName"
                      className="md-input"
                      id="writerName"
                      placeholder="writerName *"
                      value={input.writerName}
                      onChange={handleSubmit}
                      required=""
                      data-error="Please Enter Valid Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
              <textarea
                  name="title"
                  className="md-textarea"
                  id="title"
                  rows="2"
                  placeholder="Your title *"
                  required=""
                  value={input.title}
                  onChange={handleSubmit}
                  data-error="Please, Leave us a message"
                ></textarea>
                <textarea
                  name="content"
                  className="md-textarea"
                  id="content"
                  rows="7"
                  placeholder="Your contents *"
                  required=""
                  value={input.content}
                  onChange={handleSubmit}
                  data-error="Please, Leave us a message"
                ></textarea>
              </div>

              <button className="btn btn-success pull-right" onClick={register}>등록</button>
                        
              <Link to ="/reviews/review_list">
                                <button className="btn btn-danger" 
                                style={{marginLeft:"10px"}}>취소</button>
                            </Link>
            </form>
          </div>
          </div>
    );
}

export default ReviewRegister