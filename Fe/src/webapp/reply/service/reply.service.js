import axios from 'axios'
const SERVER = 'http://localhost:8080';
const register=(fd)=>{
   return axios.post(`${SERVER}/replies/register`, fd, {
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
    return axios.put(`${SERVER}/replies/modify/`+reply.rno, reply,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response=>{
        return response.data
    })
}

const deletes=(rno)=>{
    return axios.delete(`${SERVER}/replies/remove/${rno}`, {data:{...rno}})
}

export default{register, list, modify, deletes}