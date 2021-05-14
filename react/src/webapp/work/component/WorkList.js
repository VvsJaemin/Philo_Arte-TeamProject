import React from 'react'

import {Link} from 'react-router-dom';

const WorkList = () => {


    

    return (
        <> < h1 > WorkList</h1>
        < Link to = "/work/work-register" > <button>작품 등록</button>
    </Link>
    < Link to = "/work/work-read" > <button>작품 읽기</button>
    </Link>
    < Link to = "/work/work-modify" > <button>작품 수정</button>
    </Link>
         < Link to = "/" > <button>취소</button>
    </Link>
</>
    )
}

export default WorkList