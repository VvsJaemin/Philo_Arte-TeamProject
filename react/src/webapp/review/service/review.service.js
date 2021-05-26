import axios from 'axios'

const register=(input)=>{
    return axios.post("http://localhost:8080/reviews/register", input)
}

const list=(page)=>{
    return axios.get("http://localhost:8080/reviews/list/pages?page="+page)
}

const read=(reviewId)=>{
    return axios.get(`http://localhost:8080/reviews/read/${reviewId}`)
}

const modify=(review)=>{

    return axios.put("http://localhost:8080/reviews/modify/"+review.reviewId, review)
}

const deletes=(reviewId)=>{
    console.log("Delete Review")
    return axios.delete(`http://localhost:8080/reviews/remove/${reviewId}`, {data:{...reviewId}})
}

export default{register, list, read, modify, deletes}