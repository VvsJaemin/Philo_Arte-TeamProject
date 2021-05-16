import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link} from 'react-router-dom';
import { getReviewRead } from '../reducer/review.reducer';

const ReviewRead = (props) => {

    

    const [read, setRead] = useState({
        
    })

    const onChange=useCallback(e=>{
        setRead({
            ...read,
            [e.target.value] : e.target.value
        })
    },[read])

    useEffect(() => {
        getReviewRead()
    },[])



    const dispatch = useDispatch()

    return (
        <div>
            <div className = "card col-md-6 offset-md-3">
                <h3 className ="text-center"> Read Detail</h3>
                        <div className = "row">      
                        
                            <label> Title </label> : {read.title}
                        </div>

                        <div className = "row">
                            <label> Contents </label> : <br></br>
                            <textarea value={read.content} readOnly/> 
                        </div >

                        <div className = "row">
                            <label> MemberNo  </label>: 
                            {read.id}
                        </div>

                        <Link to="/reviews/review_list">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}}>글 목록으로 이동</button></Link>
                        <Link to="/reviews/review_modify">
                        <button className="btn btn-primary" style={{marginLeft:"10px"}}>수정하기</button></Link>
                        
                </div>
            </div>

    );
}



export default ReviewRead