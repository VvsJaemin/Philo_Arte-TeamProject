import axios from 'axios'

const register=(input)=>{
    return axios.post("http://localhost:8080/reviews/register", input)
}

const list=()=>{
    return axios.get("http://localhost:8080/reviews/list")
}

const read=()=>{
    return axios.get("http://localhost:8080/reviews/read/id")
}

export default{register, list, read}