import axios from 'axios'

const SERVER = 'http://localhost:8080';

const register=(input)=>{
    return axios.post("http://localhost:8080/reviews/register", input)
}

const list=(pageResult)=>{
    console.log('service hireList pageRequest: ' + JSON.stringify(pageResult));
    //return axios.get("http://localhost:8080/reviews/list/pages?page="+page)

    const str = "page=" + (!pageResult.page?1:pageResult.page) +"&type="+ (pageResult.type) +"&keyword=" + (pageResult.keyword)

    const str2 = "page=" + pageResult

    return axios.get("http://localhost:8080/reviews/list/pages?" + str)
}

const pageList=(page)=>{
    console.log('service hireList pageRequest: ' + JSON.stringify(page));
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