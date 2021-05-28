import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentReply, getReplyDelete, getReplyList, getReplyModify, getReplyRead } from '../reducer/reply.reducer'
import {Link, useParams} from 'react-router-dom';
import { currentReview, getReviewModify, getReviewRead } from 'webapp/review/reducer/review.reducer';

import { ReplyModify } from '..';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const rand=()=> {
    return Math.round(Math.random() * 20) - 10;
  }
  
  const getModalStyle=()=> {
    const top = 10+  rand();
    const left =  10+ rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 600,
      height: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const ReplyList=({reviewId, changeFlag, flag})=>{

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


    const dispatch = useDispatch()
  

    const replies = useSelector(state =>{

        return state.replies.reply;
    })

    const deletes =async(rno)=>{
        if(window.confirm("정말 삭제하시겠습니까?"))
       await dispatch(getReplyDelete(rno))
       changeFlag()
    }

    useEffect((e)=>{
        dispatch(getReplyList(reviewId))
    },[flag, renew])

    const [show, setShow] = useState(false)

    const [modalTitle, setModalTitle] = useState({})

    const handleOpen = (targetReply) => {

        setModalTitle(targetReply)
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleChangeText =(e)=>{

        const renew = {...modalTitle}
        // 새롭게 객체 분해 
        renew.text = e.target.value // text 부분만 

        console.log("renew", renew)

        setModalTitle(renew)
    }

    const handleModify =async (e)=>{
        e.preventDefault()
        e.stopPropagation()

        console.log("handleModify", modalTitle)

       await dispatch(getReplyModify(modalTitle))
    }

      const body = (
        <div style={modalStyle} className={classes.paper}>
            <div>
                <div>
                    <div className = "card col-md-5 offset-md-3">
                        <h3 className="text-center">댓글을 수정하세요</h3>
                        <div className = "card-body">
                            <form>
                            <div className = "form-group">
                                    <label> 게시글 번호 </label>
                                    <textarea className="form-control" 
                                    value={modalTitle.reviewId} name="reviewId" readOnly/>
                                </div>
                        <div className = "form-group">
                            <label> 댓글번호 </label>
                            <textarea className="form-control" 
                            value={modalTitle.rno} name="rno" readOnly/>
                        </div>
                        <div className = "form-group">
                            <label> 작성자 </label>
                            <textarea className="form-control" 
                            value={modalTitle.replyer} name="replyer" readOnly/>
                        </div>
                        <div className = "form-group">
                            <label> 댓글 내용  </label>
                            <input type='text' placeholder="댓글을 수정하세요" name="text" className="form-control" 
                            value={modalTitle.text} onChange={(e)=>handleChangeText(e)}></input>
                                </div>
                        <div>
                        <button onClick={(e)=>handleModify(e)}>수정하기</button>
                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );

    return (
        <>  
        <h3 className="text-center">댓글 목록</h3>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

         <div className="row">
             <table className="table table-striped table-bordered">
                 <thead style={{textAlign :'center'}}>
            <tr>
                <td>댓글 번호</td>
                <td>댓글 내용</td>
                <td>작성자</td>
                <td>등록일 </td>
                <td>리뷰번호</td>
                <td>댓글 삭제</td>
                <td>댓글 수정</td>
            </tr>
            </thead>
            <tbody style={{textAlign :'center'}}>
             {
                replies.map((reply, rno) => {
                    return (
                        <tr key={reply.rno}>
                            <td>{reply.rno}</td>
                            <td>{reply.text}</td>
                            <td>{reply.replyer}</td>
                            <td>{reply.regDate}</td>
                            <td>{reviewId}</td>
                            <td><button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={()=>deletes(reply.rno)}>댓글삭제</button></td>

                            <td><button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={() =>handleOpen(reply)}>댓글수정</button>
                            </td>
                            <ReplyModify open={show} handleClose={()=>handleClose()}></ReplyModify>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
            
    </div><br/>
    < Link to = "/" > <button>홈으로</button>
    </Link>
          < Link to = "/replies/reply_register"> <button>댓글 등록하기</button>
    </Link>
</>
    )
}

export default ReplyList