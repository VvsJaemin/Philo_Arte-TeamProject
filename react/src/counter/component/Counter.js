import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

const Counter = () => {
    const[count, setCount] = useState(0)
    useEffect(() => {setCount(0)},[])
    return (
        <> < h1 > 카운터</h1> 
        <div>
         <div>
            <button aria-label="+" onClick={() => {setCount(count+1)}}>
                +
            </button>
            <span>{count}</span>
            <button aria-label="-" onClick={() => {setCount(count-1)}}>
                -
            </button>
        </div>
      </div>

</>
    )
}

export default Counter