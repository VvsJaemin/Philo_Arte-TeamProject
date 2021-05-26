import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentReply, getReplyList, getReplyRead } from '../reducer/reply.reducer'
import {Link} from 'react-router-dom';

const ReplyList=()=>{
   

    const replies = useSelector(state=>{
        console.log("state: " + JSON.stringify(state.replies))
        return state.replies
    })

    const dispatch = useDispatch()

    const selectContent =(rno)=>{
        dispatch(getReplyRead(rno))
    }

    useEffect(()=>{
        dispatch(getReplyList())
    },[])

    return (
        <>  
        <h3 className="text-center">댓글 목록</h3>
         <div className="row">
             <table className="table table-striped table-bordered">
                 <thead style={{textAlign :'center'}}>
            <tr>
                <td>No</td>
                <td>댓글</td>
                <td>작성자</td>
                <td>등록일 </td>
            </tr>
            </thead>
            <tbody style={{textAlign :'center'}}>
             {
                replies.map((reply, rno) => {
                    return (
                        <tr key={rno}>
                            <td>{rno}</td>
                            <td onClick={()=>selectContent(reply.reviewId)}>{reply.text}<Link to={`/reviews/review_list`}></Link></td>
                            <td>{reply.replyer}</td>
                            <td>{reply.regDate}</td>
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