import React, {useState} from 'react';
import BoardRegister from "../components/BoardRegister";
import BoardList from "../components/BoardList";
import {Link, Route} from "react-router-dom";

const BoardPage = () => {

    const [result, setResult] = useState(false)

    const requestRefresh = (result) => {

        console.log("REQUEST REFRESH")

        setResult(!result)
    }


    return (
        <div>
            <h1>BoardPage</h1>

            <Link to = "/boards/board_register">파일 등록하기</Link><br></br>
            <Link to = "/boards/board_list">목록 보기</Link>



        </div>
    );
};

export default BoardPage;