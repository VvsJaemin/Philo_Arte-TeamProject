import React from 'react'
import { useDispatch } from 'react-redux'

import getReviewList from 'webapp/review/reducer/review.reducer'
import ReviewList from '../component/ReviewList'
import ReviewPageList from '../component/ReviewPageList'


const Review =()=>{

    return(
        <div>
        <ReviewList></ReviewList>
        <ReviewPageList></ReviewPageList>
    </div>
    )
}

export default Review;