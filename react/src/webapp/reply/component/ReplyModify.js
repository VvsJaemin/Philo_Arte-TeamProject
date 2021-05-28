import { Dialog } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { currentReview, getReviewList, getReviewModify } from 'webapp/review/reducer/review.reducer';
import { currentReply, getReplyList, getReplyModify } from '../reducer/reply.reducer';

const ReplyModify=({open, handleClose})=>{
 
    return(<>
    <Dialog open={open} onClose={handleClose}>
         </Dialog>
    
    </>)
}

export default ReplyModify