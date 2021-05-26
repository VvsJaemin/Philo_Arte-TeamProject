import axios from 'axios'

const register=(input)=>{
    return axios.post("http://localhost:8080/replies/register", input)
}

const list=(reviewId)=>{
    return axios.get(`http://localhost:8080/replies/list/${reviewId}`)
}

const read=(rno)=>{
    return axios.get(`http://localhost:8080/replies/read/${rno}`)
}

const modify=(reply)=>{

    return axios.put("http://localhost:8080/replies/modify/"+reply.rno, reply)
}

const deletes=(rno)=>{
    console.log("Delete Review")
    return axios.delete(`http://localhost:8080/replies/remove/${rno}`, {data:{...rno}})
}

export default{register, list, read, modify, deletes}