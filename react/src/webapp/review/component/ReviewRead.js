import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link, useParams} from 'react-router-dom';
import { getReviewRead } from '../reducer/review.reducer';

const ReviewRead = (props) => {
    const params = useParams()
    const dispatch = useDispatch()

    const reviews= useSelector((state)=>state.reviewSlice)
    const [read, setRead] = useState({
       
    })

    const fetchRead =()=>{
        dispatch(getReviewRead(params.id))
    }
    const onChange=useCallback(res=>{
        setRead(res.data)
    },[read])

    useEffect(() => {
        fetchRead()
    },[])


    return (
        <div>
            <div className = "card col-md-6 offset-md-3">
                <h3 className ="text-center"> Read Detail</h3>
                        <div className = "row">      
                        
                            <label> Content </label>
                            <textarea name="content" value={read.content} onChange={onChange} readOnly/> 
                        </div>

                        <div className = "row">
                            <label> Comment </label> : <br></br>
                            <textarea name="content" value={read.comment} onChange={onChange} readOnly/> 
                        </div >

                        <div className = "row">
                            <label> 게시글 번호  </label> : 
                            {params.reviewId}
                        </div>

                        <Link to="/">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}}>나가기</button></Link>
                        <Link to="/reviews/review_modify/:reviewId">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}}>수정하기</button></Link>
                        
                </div>
            </div>

    );
}



export default ReviewRead