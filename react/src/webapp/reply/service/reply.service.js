import axios from 'axios'
const SERVER = 'http://localhost:8080';
const register=(input)=>{

    let formData = new FormData();
//     var imagefile = document.querySelector('#file');
// formData.append("image", imagefile.files[0]);
    formData.append("text",input.text);
    formData.append("replyer",input.replyer);
    formData.append("reviewId",input.reviewId)
   return axios.post(`${SERVER}/replies/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    .then(response=>{
        return response.data
    })

}

const list=(reviewId)=>{
    return axios.get(`${SERVER}/replies/list/${reviewId}`)
}

const modify=(reply)=>{
    let formData = new FormData(); // 파일 데이터를 보낼땐 Form Data 선언 
    formData.append("reviewId", reply.reviewId) // 해당 보낼 데이터를 append 추가
    formData.append("rno", reply.rno)
    formData.append("replyer", reply.replyer)
    formData.append("text", reply.text)
    console.log("modify")
    return axios.put(`${SERVER}/replies/modify/`+reply.rno, formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const deletes=(rno)=>{
    console.log("Delete reply")
    return axios.delete(`${SERVER}/replies/remove/${rno}`, {data:{...rno}})
}

export default{register, list, modify, deletes}