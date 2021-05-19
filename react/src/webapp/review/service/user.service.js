import axios from 'axios'

const register=(input)=>{
    return axios.post("http://localhost:8080/reviews/register", input)
}

const list=()=>{
    return axios.get("http://localhost:8080/reviews/list")
}

const read=(id)=>{
    return axios.get(`http://localhost:8080/reviews/read/${id}`)
}

const modify=(writer)=>{

    return axios.put(`http://localhost:8080/reviews/${writer}`)
}

const deletes=(id)=>{

    return axios.delete(`http://localhost:8080/reviews/delete/${id}`)
}

export default{register, list, read, modify, deletes}