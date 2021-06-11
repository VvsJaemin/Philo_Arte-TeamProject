import axios from 'axios'
const artList = (page) => {
  console.log("list", page)
  return axios.get(`/api/arts/list?page=${page}`)
}
const artSearch = (param) => {
  console.log("page", param)
  const str = "page=" + (!param.page ? 1 : param.page) + "&type=" + (param.type) + "&keyword=" + (param.keyword)
  console.log(str)
  return axios.get(`/api/arts/search?` + str)
}
const artRegister = (payload) => axios.post(`/api/arts/register`, payload)
const artUpload = (formData) => axios.post(`/api/art_files/upload`, formData,
  {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
)
const artFileDelete = (payload) => axios.delete(`/api/art_files/delete`, payload)
const artRead = (payload) => axios.get(`/api/arts/read/${payload}`)
const artModify= (payload) => axios.put(`/api/arts/modify`, payload)
const artDelete = (payload) => {
  return axios({
    url: `/api/arts/delete`,
    method: 'delete',
    data: payload
  })
}
const artCount = (payload) => axios.get(`/api/arts/count/${payload}`)
const artPosts = (payload) => axios.get(`/api/arts/list/${payload}`)
const categoryList = () => axios.get(`/api/category/findall`)
export default { artList, artRegister, artUpload, artFileDelete, artRead, artModify, artDelete, artSearch, artCount, artPosts, categoryList }