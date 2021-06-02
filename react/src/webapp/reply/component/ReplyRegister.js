import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { currentReview, getReviewRead, getReviewRegister } from 'webapp/review/reducer/review.reducer'
import { getReplyRegister } from '../reducer/reply.reducer'
import uuid from 'uuid/v4'

const ReplyRegister=()=>{
    const reviewObj = useSelector(currentReview)

    const [input, setInput] = useState({
        text : '',
        replyer : '',
        uuid: "",
        path: "",
        imgName : "",
        reviewId:reviewObj.reviewId
    })

    const [files, setFiles] = useState([])

    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }
    const dispatch = useDispatch()

    const history = useHistory()
    const fetchRead =()=>{
      dispatch(getReviewRead(reviewObj.reviewId))
  }
    const register =async(e)=>{
      e.preventDefault()
      e.stopPropagation()
      const formData = new FormData()
      for(let i = 0; i<files.length; i++){
        formData.append("replyFiles["+i+"]", files[i])
      }
      formData.append("path", input.path)
      formData.append("imgName", input.imgName)
      formData.append("uuid", input.uuid)
      formData.append("text", input.text)
      formData.append("replyer", input.replyer)
      formData.append("reviewId", input.reviewId)

      await dispatch(getReplyRegister(formData))
      history.replace(`/reviews/review_read/${input.reviewId}`)
    }

    const handleSubmit =(e) => {
        console.log(e.target.name, e.target.value)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
  
    const handleUpload=(e)=>{
      const fileObj = e.target
      console.dir(fileObj.files)
      setFiles(fileObj.files)
    }
    
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
                            onChange={(e) => handleSubmit(e)}
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
                            onChange={(e) => handleSubmit(e)}
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
                        onChange={(e) => handleSubmit(e)}
                        data-error="Please, Leave us a message"
                      ></textarea>
                      <input
                          type="file"
                          name="file"
                          id="reviewFileDtoList"
                          className="md-textarea"
                          rows="7"
                          multiple={true}
                          onChange={(e) =>handleUpload(e)}
                ></input>
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