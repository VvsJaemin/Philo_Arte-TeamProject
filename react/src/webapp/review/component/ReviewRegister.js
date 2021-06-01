import React, { useState, useCallback, useRef } from 'react'
import {Link, useHistory} from 'react-router-dom';
import { ReviewList } from '..';
import { getReviewRegister,getReviewList } from '../reducer/review.reducer';
import { useDispatch, useSelector } from 'react-redux';
import UploadInput from 'webapp/testupload/components/fileupload/UploadInput';
const ReviewRegister = () => {

    const reviews = useSelector(state =>{
        return state.reviews.pageResult.dtoList;
    })
    const [input, setInput] = useState({
        title : '',
        content : '',
        writerId : reviews.writerId,
        writerName : reviews.writerName,
    })

    const [files, setFiles] = useState([])

    const dispatch = useDispatch()

    const register = async(e)=>{
      e.preventDefault()
      e.stopPropagation()
      console.log(files)
      console.log(input)

      const formData = new FormData();

      for(let i=0; i<files.length; i++){
        formData.append("files["+i+"]", files[i])
      }

      formData.append("title", input.title)
      formData.append("content", input.content)
      formData.append("writerId", input.writerId)
      formData.append("writerName", input.writerName)
      
      await dispatch(getReviewRegister(formData)) 

      history.push('/reviews/review_list')

    }
    const history = useHistory()
 
    const handleSubmit= (e) => {
  
       console.log(e.target.name, e.target.value)

        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    const handleUpload = (e) => {
      const fileObj = e.target;
      console.dir(fileObj.files)
      setFiles(fileObj.files)

    }
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
                      onChange={(e) => handleSubmit(e)}
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
                      onChange={(e) => handleSubmit(e)}
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
                  onChange={(e) => handleSubmit(e)}
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