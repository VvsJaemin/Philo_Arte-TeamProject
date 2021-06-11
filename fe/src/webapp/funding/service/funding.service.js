import axios from 'axios'

const getList=(page) =>{
    return axios.get("/api/funding/list?page=" +page)
}
const fundingRegister = (data) =>{
    return axios.post("/api/funding/register", data)
}

const showDetail =(fundingId)=>{
    return axios.get(`/api/funding/${fundingId}`)
}

const fundingUpdate = (fundingId,data) =>{
    return axios.put(`/api/funding/edit/${fundingId}`,data)
    .then(res =>{
        return res.data
    })
}
const deleteFunding = (funding) =>{
    const del = window.confirm("글 삭제를 진행 하시겠습니까?")
    if(del){
    axios({
        url: `/api/funding/${funding}`,
        method:'DELETE'
    }).then(res =>{
        alert("삭제 완료")
    }).catch(err =>{
        alert("삭제과정에서 에러 발생" +err)
    })}
}
const fileUpload = (formData) => axios.post(`/api/funding_file/upload_file`,formData,
    {headers:{ "Content-Type": "multipart/form-data"}})

const deleteFile = (id) => axios.delete(`/api/funding_file/delete_file/${id}`)

const searchSomething = (page,keyword)=>{
    return axios.get("/api/funding/list/search",page,keyword)
}
export default {getList, fundingRegister,showDetail,deleteFunding,fundingUpdate,searchSomething,fileUpload,deleteFile}