import React, {useCallback, useImperativeHandle, useState} from 'react';
import {Button, Typography} from "@material-ui/core";
import axios from "axios";

const UploadInput = ({cref, getUploadedFiles, fileParam=[]}) => {

    const [files, setFiles] = useState([])
    const [uploadResult, setUploadResult] = useState(fileParam)

    useImperativeHandle(cref, () => ({

        send() {
            getUploadedFiles(uploadResult)
            setFiles([])
            setUploadResult([])
        }

    }));

    const uploadAjax = useCallback( e => {

        console.dir(e.target.files);

        const formData = new FormData()
        const files = e.target.files

        for(let i = 0; i < files.length ; i++){
            formData.append("uploadFiles", files[i])
        }

        console.log(formData)

        axios.post("http://localhost:8080/uploadAjax",formData,
            {headers: { "Content-Type": "multipart/form-data"}}
        ).then(res => {
            console.log(res)

            res.data.forEach(uploadFileInfo =>  uploadResult.push(uploadFileInfo))

            console.log(uploadResult)

            setUploadResult(uploadResult.slice(0))
        })

    })

    return (
        <div>
            <Button
                variant="contained"
                component="label">
                <Typography>{"Upload"}</Typography>

                <input id={"file-input"} style={{ display: 'none' }} type="file" name="imageFile"
                       onChange={uploadAjax}  multiple={true}/>
            </Button>
            <div>
                <ul>
                    {uploadResult.map(uploadFile => {
                        return (
                            <div key={uploadFile.uuid}>
                                <img src={"http://localhost:8080/display?fileName=s_" + uploadFile.uuid+"_"+ uploadFile.fname }/>
                                {uploadFile.fname}
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
};

export default UploadInput;