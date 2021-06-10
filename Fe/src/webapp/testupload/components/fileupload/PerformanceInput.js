import React, {useCallback, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

const PerformanceInput = ({pno, title ='', content ='', regDate, modDate, sendTextForm}) => {

    const [titleState, setTitleState] = useState(title)
    const [contentState, setContentState] = useState(content)

    const changeTitle = useCallback(e => {
        setTitleState(e.target.value)
    });

    const changeContent = useCallback(e => {
        setContentState(e.target.value)
    });

    const sendForm = useCallback(e => {
        sendTextForm(titleState, contentState)
        setTitleState('')
        setContentState('')
    })


    return (
        <form>
            <TextField id="standard-secondary" label="Title" color="secondary"  value={titleState} onChange={changeTitle}/>

            <TextField id="standard-secondary" label="Content" color="secondary" value={contentState} onChange={changeContent}/>

            <Button onClick={sendForm}>SUBMIT</Button>

        </form>
    );
};

export default PerformanceInput;