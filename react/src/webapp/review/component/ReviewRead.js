import React from 'react'

import {Link} from 'react-router-dom';

const ReviewRead = () => {

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