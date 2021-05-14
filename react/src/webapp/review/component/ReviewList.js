import React from 'react'

import {Link} from 'react-router-dom';

const ReviewList = () => {

    return (
        <> < h1 > ReviewList</h1>
        < Link to = "/review/review-register" > <button>Review 등록</button>
    </Link>
    < Link to = "/review/review-read" > <button>Review 읽기</button>
    </Link>
    < Link to = "/review/review-modify" > <button>Review 수정</button>
    </Link>
         < Link to = "/" > <button>취소</button>
    </Link>
</>
    )
}

export default ReviewList