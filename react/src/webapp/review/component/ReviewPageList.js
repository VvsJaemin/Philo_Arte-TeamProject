import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {getReviewList} from 'webapp/review/reducer/review.reducer'

const ReviewPageList=()=>{
    const {pageList, page, start, end, prev, next} = useSelector(state=>state.reviews.pageResult)

    const searchType = useSelector(state=>state.reviews.type)
    const searchKeyword = useSelector(state=>state.reviews.keyword)

    const dispatch = useDispatch()

    const movePage = (page)=>{

        const param = {type:searchType, keyword: searchKeyword, page:page}

        console.log(param)

        dispatch(getReviewList(param))
    }

    const list = pageList.map(i => <button className="btn" key={i} onClick={() => movePage(i)}> {i} </button>)

    return(
        <div style={{marginBottom:"100px"}}>
        <div className="my-auto mx-auto text-center">
          {prev? <button className="btn" onClick={() => movePage(start -1)} >
            prev
          </button> : <></>}
            {list}
          {next? <button className="btn " onClick={() => movePage(end + 1)} >next
          </button> : <></>}
        </div>
      </div>

    )


}

export default ReviewPageList