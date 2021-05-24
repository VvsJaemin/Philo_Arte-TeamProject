import React, { useState, useCallback } from 'react'

import {Link, useHistory} from 'react-router-dom';
import { ReviewList } from '..';
import { getReviewRegister } from '../reducer/review.reducer';
import { useDispatch } from 'react-redux';
const ReviewRegister = () => {

    const [input, setInput] = useState({
        title : '',
        content : '',
    })

    const dispatch = useDispatch()

    const history = useHistory()
    
    const handleSubmit = useCallback(e => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name] : value
        })
    },[input])

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">리뷰를 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Title </label>
                                    <input type="text" placeholder="제목을 입력해주세요" name="content" className="form-control" 
                                    value={input.title} onChange={handleSubmit}/>
                                </div>
                                <div className = "form-group">
                                    <label> Content  </label>
                                    <input type='text' placeholder="내용을 입력해주세요" name="content" className="form-control" 
                                    value={input.content} onChange={handleSubmit}/>
                                </div>
                                {/* <div className = "form-group">
                                    <label> Writer  </label>
                                    <input type='text' placeholder="작성자를 입력해주세요" name="writer" className="form-control" 
                                    value={input.writer} onChange={handleSubmit}/>
                                </div> */}
                                {/* <div className = "form-group">
                                    <label> MemberNo  </label>
                                    <input placeholder="memberNo" name="memberNo" className="form-control" 
                                    value={this.state.memberNo} onChange={this.changeMemberNoHandler}/>
                                </div> */}
                                <button className="btn btn-success" onClick={()=>dispatch(getReviewRegister(input), history.push("/reviews/review_list"))}>등록</button>
                            <Link to ="/reviews/review_list">
                                <button className="btn btn-danger" 
                                style={{marginLeft:"10px"}}>취소</button>
                            </Link>


                                {/* <button className="btn btn-danger" onClick="/" style={{marginLeft:"10px"}}>취소</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ReviewRegister