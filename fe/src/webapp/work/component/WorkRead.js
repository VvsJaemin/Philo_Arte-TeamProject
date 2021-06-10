import React from 'react'

import {Link} from 'react-router-dom';

const WorkRead = () => {

    return (
        <> < h1 > WorkRead</h1>
         < Link to = "/" > <button>홈으로</button>
    </Link>
    < Link to = "/work/work-list" > <button>뒤로가기</button>
    </Link>
</>
    )
}

export default WorkRead