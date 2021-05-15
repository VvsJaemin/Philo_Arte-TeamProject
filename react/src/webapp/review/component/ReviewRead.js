import React, { useState } from 'react'

import {Link} from 'react-router-dom';

const ReviewRead = () => {

    const [read, setRead] = useState({
        review : {}
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviewList())
    },[])

    return (
        <> < h1 > ReviewRead</h1>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    < Link to = "/review/review-list" > <button>뒤로가기</button>
    </Link>
</>
    )
}

export default ReviewRead