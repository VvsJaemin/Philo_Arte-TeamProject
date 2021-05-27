import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentReply, getReplyDelete, getReplyList, getReplyRead } from '../reducer/reply.reducer'
import {Link, useParams} from 'react-router-dom';
import { getReviewRead } from 'webapp/review/reducer/review.reducer';

const ReplyList=({reviewId, changeFlag, flag})=>{
    const params = useParams()
    const dispatch = useDispatch()

    const replies = useSelector(state =>{

        return state.replies.replies;
    })
    const deletes =async(rno)=>{
        if(window.confirm("정말 삭제하시겠습니까?"))
       await dispatch(getReplyDelete(rno))
       changeFlag()
    }

    useEffect((e)=>{
        dispatch(getReplyList(reviewId))
    },[flag])

    return (
        <>  
        <h3 className="text-center">댓글 목록</h3>
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