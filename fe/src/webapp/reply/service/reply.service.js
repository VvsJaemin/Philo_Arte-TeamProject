
import axios from 'axios';

const userInfo =  typeof window !== `undefined`  ? JSON.parse(localStorage.getItem('USER')) : null;

const register = (fd) => {

    return axios({
        url : `/replies/register`,
        method : 'post',
        data : fd,
        headers :{
            'Authorization' : `Bearer ${userInfo.token}`
        }
    })

};

const list = (reviewId) => {

    return axios({
        url : `/replies/list/${reviewId}`,
        method : 'get',
        headers:{
            'Authorization': 'JWT fefege..'
        }
    })

};

const modify = (reply) => {

    return axios({
        url : '/replies/modify/'+reply.rno,
        method : 'put',
        data : reply,
        headers :{
            'Content-Type': 'multipart/form-data',
            'Authorization' : `Bearer ${userInfo.token}`
        }
    })
};

const deletes = (rno) => {
    return axios({
        url : `/replies/remove/${rno}`,
        method: 'delete',
        data : {...rno},
        headers:{
            'Authorization': 'JWT fefege..'
        }
    })

};

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