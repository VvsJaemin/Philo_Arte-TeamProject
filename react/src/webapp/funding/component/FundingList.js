import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link} from 'react-router-dom';

const FundingList = () => {



    return (
        <> < h1 > FundingList</h1>
        < Link to = "/funding/funding-register" > <button>Funding 등록</button>
    </Link>
    < Link to = "/funding/funding-read" > <button>Funding 읽기</button>
    </Link>
    < Link to = "/funding/funding-modify" > <button>Funding 수정</button>
    </Link>
         < Link to = "/" > <button>취소</button>
    </Link>
</>
    )
}

export default FundingList