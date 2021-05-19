import axios from 'axios'

const register=(input)=>{
    return axios.post("http://localhost:8080/reviews/register", input)
}

const list=()=>{
    return axios.get("http://localhost:8080/reviews/list")
}

const read=(reviewId)=>{
    return axios.get(`http://localhost:8080/reviews/read/${reviewId}`)
}

const modify=(reviewId)=>{

    return axios.put(`http://localhost:8080/reviews/${reviewId}`)
}

const deletes=(reviewId)=>{

    return axios.delete(`http://localhost:8080/reviews/delete/${reviewId}`)
}

export default{register, list, read, modify, deletes}