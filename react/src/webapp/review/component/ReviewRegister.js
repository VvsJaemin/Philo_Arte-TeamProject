import React, { useState, useCallback } from 'react'

import {Link, useHistory} from 'react-router-dom';
import { ReviewList } from '..';
import { getReviewRegister } from '../reducer/review.reducer';
import { useDispatch, useSelector } from 'react-redux';
const ReviewRegister = () => {
   
    const reviews = useSelector(state =>{
        return state.reviews.pageResult.dtoList;
    })

    const [input, setInput] = useState({
        title : '',
        content : '',
        writerId : reviews.writerId,
        writerName : reviews.writerName
    })

    const dispatch = useDispatch()

    const register = ()=>{
        alert("등록이 완료 되었습니다.")
        dispatch(getReviewRegister(input))
        history.push('/reviews/review_list')
    }

    const history = useHistory()
    
    const handleSubmit = useCallback(e => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name] : value
        })
    },[input])

    return (
        <div className="container-fluid">
            <div>
                <div>
                    <div className = "card col-md-5 offset-md-3">
                        <h3 className="text-center">리뷰를 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Title </label>
                                    <input type="text" placeholder="제목을 입력해주세요" name="title" className="form-control" 
                                    value={input.title} onChange={handleSubmit}/>
                                </div>
                                <div className = "form-group">
                                    <label> Content  </label>
                                    <input type='text' placeholder="내용을 입력해주세요" name="content" className="form-control" 
                                    value={input.content} onChange={handleSubmit}/>
                                </div>
                                <div className = "form-group">
                                    <label> 작성자  </label>
                                    <input placeholder="작성자를 입력해주세요" name="writerName" className="form-control" 
                                    value={input.writerName} onChange={handleSubmit}/>
                                </div>
                                <div className = "form-group">
                                    <label> 작성자 번호  </label>
                                    <input placeholder="작성자 번호를 입력해주세요" name="writerId" className="form-control" 
                                    value={input.writerId} onChange={handleSubmit}/>
                                </div>
                                <button className="btn btn-success pull-right" onClick={register}>등록</button>
                            
                            <Link to ="/reviews/review_list">
                                <button className="btn btn-danger" 
                                style={{marginLeft:"10px"}}>취소</button>
                            </Link>
                            <hr/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewRegister