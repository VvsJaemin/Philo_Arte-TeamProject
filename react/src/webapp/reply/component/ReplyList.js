import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReplyDelete, getReplyList, getReplyModify} from '../reducer/reply.reducer'
import {Link, useParams} from 'react-router-dom';
import { currentReview, getReviewRead } from 'webapp/review/reducer/review.reducer';

import { ReplyModify } from '..';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

  
  const getModalStyle=()=> {
    const top = 50
    const left =  50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: "auto",
      height: "auto",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    paper2: {
      position: 'absolute',
      width: "auto",
      height: "auto",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      overflow: 'hidden',
    
    },
  }));


const ReplyList=({reviewId, changeFlag, flag})=>{

  const classes = useStyles();

  const imgRef = useRef()

  console.log(imgRef)

  const [modalStyle] = React.useState(getModalStyle); 

  const [modalImage, setModalImage] = useState('')

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [files, setFiles] = useState([])

    const dispatch = useDispatch()  

    const params = useParams()

    const reviewObj = useSelector(currentReview)

    const replies = useSelector(state =>{

        return state.replies.reply;
    })
    
    console.log("=======", replies)
    
    const fetchRead =()=>{
      dispatch(getReviewRead(params.reviewId))
  }
    // replyDelete
    const deletes =async(rno)=>{
      let deleteResult = window.confirm("정말 삭제하시겠습니까?")
      if(deleteResult){
        await dispatch(getReplyDelete(rno))
        changeFlag()
        fetchRead()
      }
    }

    useEffect(()=>{
        dispatch(getReplyList(reviewId))
    },[flag])

    // replyModify

    const [show, setShow] = useState(false)

    const [modalTitle, setModalTitle] = useState({}) 

    console.log(modalTitle)


    const handleOpen = (targetReply) => {  // 수정버튼을 클릭할 때 reply에 있는 데이터를 가져와 setModalTitle에 담아서 열어 준다. 
        setModalTitle(targetReply)
        setOpen(true);
      };

      
    const handleOpen2 = (e) => { 
      
      setModalImage(e.target.src)
      console.dir(imgRef.current)
      setOpen2(true)
    };

    const handleClose =()=>{
      setOpen(false)
    }

      const handleClose2 = () => {
        setOpen2(false);
      };

      const handleChangeText =(e)=>{

        const renew = {...modalTitle}
        // 새롭게 객체 분해 
        renew.text = e.target.value // text 부분만 
        
        console.log("renew", renew)

        setModalTitle(renew)
    }

    const fileModify=async(e)=>{
      e.preventDefault()
      e.stopPropagation()
      alert("수정이 완료되었습니다")
       const formData = new FormData()
      for(let i = 0; i<files.length; i++){
        formData.append("replyFiles["+i+"]", files[i])
      }
      formData.append("path", modalTitle.path)
      formData.append("replyer", modalTitle.replyer)
      formData.append("rno", modalTitle.rno)
      formData.append("imgName", modalTitle.imgName)
      formData.append("uuid", modalTitle.uuid)
      formData.append("text", modalTitle.text)
      formData.append("reviewId", modalTitle.reviewId)
      
      await dispatch(getReplyModify(formData))

      changeFlag() // 수정한 후 바꾸게 하는 것
      handleClose() //  모달을 종료 호출
    }

    const handleChangeFile=(e)=>{
      const fileObj = e.target
      console.log(fileObj)
      setFiles(fileObj.files)
    }
    
    const replyBody = (
      <div style={modalStyle} className={classes.paper} >
        <h3 className="text-center">댓글을 수정하세요</h3><br></br>
                  <div className="row-form row">
                  <div className="col-form col-md-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="replyer"
                          className="md-input"
                          id="replyer"
                          placeholder="댓글 등록자 *"
                          value={modalTitle.replyer}
                          style={{color:"black"}}
                          required=""
                          data-error="Please Enter Valid Email" readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="text"
                      className="md-textarea"
                      id="text"
                      rows="5"
                      placeholder="댓글을 수정하세요 *"
                      required=""
                      value={modalTitle.text}
                      style={{color:"black"}}
                      onChange={(e)=>handleChangeText(e)}
                      data-error="Please, Leave us a message"
                    ></textarea>
                    <div className="display-flex">
                      {modalTitle&&modalTitle.imgName ?
                         <div key={modalTitle.uuid}>
                         <img src={"http://localhost:8080/review_files/display?imgName="+modalTitle.uuid+"s_"+modalTitle.imgName}/></div> : <></>
                    }</div>
                                
              <input
                  style={{color:"black"}}
                  type="file"
                  name="file"
                  id="replyFiles"
                  className="md-textarea"
                  rows="7"
                  onChange={(e) =>handleChangeFile(e)}
                ></input>
                  </div>
                  <button onClick={fileModify} className="btn btn-success pull-right" >수정하기</button>
              </div>
        
    );

    const replyFileBody=(
      <div style={modalStyle} className={classes.paper2} >
      <div className="display-flex">
        <button>
          <div key={modalImage.uuid}>
            <img onClick={(e)=>handleOpen2(e)} src={modalImage}/>
            </div>
              </button>
    </div>
    </div>
    )


    return (
        <>  
     
          <h3 className="text-center">{reviewObj.replyCount}개의 댓글</h3>
       
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {replyBody}
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
       {replyFileBody}
      </Modal>
          <br></br>
             {  replies.length > 0 ?
                 replies.map((reply, rno) =>  {
                    return (
                      <ul className=" container comment-box">
                       <li className="post-comment" key={reply.rno}>
                          <div className="comment-content">
                            <div className="post-body">
                              <div className="comment-header">
                                <span className="author">
                                   {reply.replyer}
                                </span>
                                <span className="pull-right">
                                  {reply.regDateTime}
                                </span>
                              </div>
                              <div className="post-message">
                                <p>{reply.text}</p>
                              </div>
                              <div className="comment-footer">
                                <span className="reply">
                                  <button className="btn btn-success pull-right" onClick={()=>deletes(reply.rno)}>삭제</button>
                                  <button className="btn btn-success pull-right" style={{marginRight:"10px"}} onClick={() =>handleOpen(reply)}>수정</button>
                                </span>
                                <div className="display-flex">
                            <>
                        {reply&&reply.imgName ?
                                    <button>
                                       <div key={reply.uuid}> <img onClick={(e)=>handleOpen2(e)} src={"http://localhost:8080/review_files/display?imgName="+reply.uuid+"s_"+reply.imgName}/>
                                      </div>
                                    </button>
                            :<></>}
                               </>
                        </div>   
                              </div>
                            </div>
                          </div>
                        </li>
                            <ReplyModify open={show} handleClose={()=>handleClose()}></ReplyModify>
                      </ul>
                    ) 
                })  
                
           : <div className="text-center">첫 번째 댓글을 입력해주세요</div> }
</>
    )}


export default ReplyList