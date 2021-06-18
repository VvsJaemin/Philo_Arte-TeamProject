import axios from 'axios'

const userInfo = typeof window !== `undefined` ? JSON.parse(localStorage.getItem('artist')) : null;

const artList = (page) => {
    console.log("list", page)

    return axios({
        url: `/arts/list?page=${page}`,
        method: 'get',
        headers: {
            Authorization: 'JWT fefefg...'
        }
    })
}

const artSearch = (param) => {
    const str = "page=" + (!param.page ? 1 : param.page) + "&type=" + (param.type) + "&keyword=" + (param.keyword)
    return axios({
        url: `/arts/search?` + str,
        method: 'get',
        headers: {
            Authorization: 'JWT fefefg...'
        }
    })
}

const artRegister = (payload) => {
    return axios({
        url: `/arts/register`,
        method: 'post',
        data: payload,
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        }
    })
}

const artUpload = (formData) => {
    return axios({
        url: `/art_files/upload`,
        method: 'post',
        data: formData,
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-Type": "multipart/form-data"
        }
    })
}

const artFileDelete = (payload) => {
    return axios({
        url: `/art_files/delete`,
        method: 'delete',
        data: payload,
        headers: {
            Authorization: 'JWT fefefg...'
        }
    })
}

const artRead = (payload) => {
    return axios({
        url: `/arts/read/${payload}`,
        method: 'get',
        headers: {
            Authorization: 'JWT fefefg...'
        }
    })
}

const artModify = (payload) => {
    return axios({
        url: `/arts/modify`,
        method: 'put',
        data: payload,
        headers: {
            Authorization: `Bearer ${userInfo.token}`
        }
    })
}

const artDelete = (payload) => {
    return axios({
        url: `/arts/delete`,
        method: 'delete',
        data: payload,
        headers: {
            Autorization: 'JWT fefefg...'
        }
    })
}

const artCount = (payload) => {
    return axios({
        url: `/arts/count/${payload}`,
        method: 'get',
        headers: {
            Autorization: 'JWT fefefg...'
        }
    })
}

const artPosts = (payload) => {
    return axios({
        url: `/arts/list/${payload}`,
        method: 'get',
        headers: {
            Autorization: 'JWT fefefg...'
        }
    })
}

const categoryList = () => {
    return axios({
        url: `/category/findall`,
        method: 'get',
        headers: {
            Authorization: 'JWT fefefg...'
        }
    })
}

export default {
    artList,
    artRegister,
    artUpload,
    artFileDelete,
    artRead,
    artModify,
    artDelete,
    artSearch,
    artCount,
    artPosts,
    categoryList
}