import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import {getReviewRegister } from '../reducer/review.reducer';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Review.css'
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
    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }

    const register = async(e)=>{
      e.preventDefault()
      e.stopPropagation()

      const formData = new FormData();

        for(let i=0; i<files.length; i++){
          formData.append("files["+i+"]", files[i])
        }
        formData.append("title", input.title)
        formData.append("content", input.content)
        formData.append("writerId", input.writerId)
        formData.append("writerName", input.writerName)
          await dispatch(getReviewRegister(formData)) 
          changeFlag()
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

    const reviewObj = useSelector(state=>{
      return state.reviews.params
  })

  const reviewFile = reviewObj.reviewFileDtoList

    return (
      <section className="white-bg">
            <div className = "container" style={{marginTop:"-100px", marginBottom:"auto"}}>
             <div id="respond" className="comment-respond">
            <h1 className="section-title text-center" >Review Regist</h1>

              <div className="row-form row">
                <div className="col-form col-md-2">
                 
                    <input
                      style={{color:"black" , marginBottom:"30px"}}
                      type="text"
                      name="writerId"
                      placeholder="writerId *"
                      value={input.writerId}
                      onChange={(e) => handleSubmit(e)}/>
                </div>
                </div>
        
                <div className="row-form row">
                <div className="col-form col-md-2">
                    <input
                       style={{color:"black" , marginBottom:"30px"}}
                      type="text"
                      name="writerName"
                      placeholder="writerName *"
                      value={input.writerName}
                      onChange={(e) => handleSubmit(e)}
                    />
                </div>
                </div>
              
            
              <div className="row-form row">
                <div className="col-form col-md-5">

                 <textarea
                 style={{color:"black", marginBottom:"30px"}}
                  name="title"
                  placeholder="Your title *"
                  value={input.title}
                  onChange={(e) => handleSubmit(e)}>
                  </textarea>
                </div>
                </div>

                <div className="row-form row">
                <div className="col-form col-md-10">

                <textarea
                   style={{color:"black" , marginBottom:"30px"}}
                  name="content"
                  id="content"
                  rows="7"
                  placeholder="Your contents *"
                  value={input.content}
                  onChange={(e) => handleSubmit(e)}
                ></textarea>
                </div>
                </div>
                <label className="input-file-button " for="input-file">Upload</label>
                    <input type="file" name="file" id="input-file" style={{display:"none"}} multiple={true} onChange={(e) =>handleUpload(e)}/>
              </div>
              <div className="display" style={{marginTop:"100px" , marginBottom:"50px" , textAlign:"center"}}>
                            <>
                        { reviewFile && reviewFile[0] ? reviewFile.map((file,i)=>{
                                return(
                                    <div key={file.uuid}> <img src={"http://localhost:8080/review_files/display?imgName="+"s_"+file.uuid+file.imgName}/>
                                      </div>
                                )
                            }) :<></>}
                               </>
                        </div>
              
                   <button className="btn btn-success btn-md btn-default remove-margin pull-right" onClick={register}>Register</button>
                   <Link to ="/reviews/review_list">
            <button className="btn btn-color btn-md btn-default remove-margin" style={{marginLeft:"10px"}}>Cancel</button>
                   </Link>
          </div>
      </section>
      
    );
}
export default ReviewRegister