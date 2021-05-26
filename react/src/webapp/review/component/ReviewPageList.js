import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {getReviewList} from 'webapp/review/reducer/review.reducer'

const ReviewPageList=()=>{
    const {pageList, page, start, end, prev, next} = useSelector(state=>state.reviews.pageResult)

    const dispatch = useDispatch()

    console.log(pageList)

    const movePage = (page)=>{
        dispatch(getReviewList(page))
    }

    const listNum = pageList.map(i=><button key={i} onClick={()=>movePage(i)}>{i}</button>)

    return(
        <div>
        {prev ? <button onClick={()=>movePage(start-1)}>prev</button> : <></>}
        {listNum}
        {next ? <button onClick={()=>movePage(end+1)}>next</button> : <></>}
    </div>
    )


}

export default ReviewPageList