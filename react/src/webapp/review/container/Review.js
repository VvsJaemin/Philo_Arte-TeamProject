import { styled } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReplyList } from 'webapp/reply'

import getReviewList from 'webapp/review/reducer/review.reducer'
import { ReviewSearch } from '..'
import ReviewList from '../component/ReviewList'
import ReviewPageList from '../component/ReviewPageList'

const Review =()=>{

    return(
        <div>
        <ReviewList></ReviewList>
        <ReviewPageList ></ReviewPageList>
    </div>
    )
}

export default Review;