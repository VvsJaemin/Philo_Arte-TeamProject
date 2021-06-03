import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useHistory} from 'react-router-dom';
import { getReviewModify, currentReview } from '../reducer/review.reducer';

const ReviewModify = () => {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [files, setFiles] = useState([])
    const [fileSelect, setFileSelect] = useState(false)

    const reviewObj = useSelector(currentReview)

    const dispatch = useDispatch()
    const history = useHistory()

    const reviewFile = reviewObj.reviewFileDtoList

    console.log(reviewFile)

    useEffect(() => {
        setTitle(reviewObj.title)
        setContent(reviewObj.content)
        setFiles(reviewFile)
        setFileSelect(false)
    },[reviewObj])

    const fileModify=async(e)=>{
        let modifyResult = window.confirm("리뷰를 수정하시겠습니까?")
        const obj = {
            reviewId: reviewObj.reviewId, 
             title: title, 
            content: content, 
            writerId: reviewObj.writerId}
        const formData = new FormData()

        console.log(files)
        if(fileSelect){
            for(let i=0; i<files.length; i++){
                formData.append("files["+i+"]", files[i])
            }
        }
        formData.append("fileSelect", fileSelect)
        formData.append("title", obj.title)
        formData.append("content", obj.content)
        formData.append("reviewId", obj.reviewId)
        formData.append("writerId", obj.writerId)
        
        if(modifyResult){
            alert("리뷰 수정 완료!")
            await dispatch(getReviewModify(formData))
            setFiles(null)
            history.push(`/reviews/review_read/${reviewObj.reviewId}`)
        }
      
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const handleChangeFile=(e)=>{
        const fileObj = e.target
        console.dir(fileObj.files)
        setFiles(fileObj.files)
        setFileSelect(true)
    }

    return (
        <div className="container" >
         < h2 className="text-center"  style={{marginTop:"50px", marginBottom:"50px"}}>Review Modify</h2>
         <div style={{marginBottom:"50px"}} >
              <button className="btn btn-success pull-right" onClick={fileModify}>수정하기</button>
        < Link to = {`/reviews/review_read/${reviewObj.reviewId}`} > 
        <button className="btn btn-success" >뒤로가기</button> </Link>
              </div>
            <div className="row-form row">
                <div className="col-form col-md-3">
                    <div className="form-group">
                    <label> * writerName </label>
                    <textarea style={{color:"black"}} value={reviewObj.writerName} name="writerName" readOnly></textarea> 
                    </div>
                </div>
            </div>  
            <div className="form-group">
            <label> * Title </label>
              <textarea name="title" style={{color:"black"}} className="md-textarea" id="title" rows="2"
                  placeholder="Your title *"
                  required=""
                  value={title}
                  onChange={(e) => handleChangeTitle(e)}
                  data-error="Please, Leave us a message"
                ></textarea>
                  <label> * Content </label>
                <textarea
                  name="content"
                  className="md-textarea"
                  style={{color:"black"}}
                  id="content"
                  rows="3"
                  placeholder="Your contents *"
                  required=""
                  value={content}
                  onChange={(e) => handleChangeContent(e)}
                  data-error="Please, Leave us a message"
                ></textarea>
                   <input
                   style={{color:"black"}}
                  type="file"
                  name="file"
                  id="reviewFileDtoList"
                  className="md-textarea"
                  rows="1"
                  multiple={true}
                  onChange={(e) =>handleChangeFile(e)}
                ></input>
                <div className="display-flex" style={{marginBottom:"50px"}}>
                            <>
                        { reviewFile && reviewFile[0] ? reviewFile?.map((file,i)=>{
                                return(
                                    <div key={file.uuid}> <img src={"http://localhost:8080/review_files/display?imgName="+"s_"+file.uuid+file.imgName}/>
                                      </div>
                                )
                            }) :<></>}
                               </>
                        </div>  
              </div>
            </div>   
    )
}

export default ReviewModify