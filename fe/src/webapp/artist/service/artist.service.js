import axios from 'axios';

<<<<<<< HEAD
const userInfo = typeof window !== `undefined` ? JSON.parse(localStorage.getItem('Artist')) :null;
=======
const SERVER = 'http://localhost:8080';
>>>>>>> parent of c9ce68b (210611 Philo Arte proxy-middleware 설정)

const list = (page) => {
    console.log('page :: ', page);
    const str = 'page=' + (!page.page ? 1 : page.page) + '&type=' + (page.type ? page.type : '') + '&keyword=' + (page.keyword ? page.keyword : '');
    return axios.get(`${SERVER}/artists/list/pages?` + str);
};

const imgList = (imgList) => {
    console.log('imgList :: ', imgList);
    const str = 'page=' + (!imgList.page ? 1 : imgList.page) + '&type=' + (imgList.type ? imgList.type : '') + '&keyword=' + (imgList.keyword ? imgList.keyword : '') + '&pageFileDto=' + (imgList.pageFileDto ? imgList.pageFileDto : '');
    return axios.get(`${SERVER}/artist_files/imgList/pages` + str);
};

const signin = (signin) => {
<<<<<<< HEAD
    return axios({
        url : `api/artists/signin`,
        method : 'post',
        data : signin,
        headers:{  Authorization: localStorage.getItem('TOKEN') }
    })

=======
    return axios.post(`${SERVER}/artists/signin`, {
        username: signin.username,
        password: signin.password,
    });
>>>>>>> parent of c9ce68b (210611 Philo Arte proxy-middleware 설정)
};

const signup = (param) => {
    alert('안올껄?');
    console.log('sevice param : ', param);
    return axios.post(`${SERVER}/artists/signup`, param, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const mypage = (artist) => {
    return axios
        .put(`${SERVER}/artists/mypage`, artist, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            return response.data;
        });
};

const deleteSelect = (deleteSelect) => {
    return axios.put(`${SERVER}/artists/delete`, deleteSelect);
};

const totalSearchBar = (totalSearchBar) => {
    return axios.put(`${SERVER}/page/totalSearchBar`, totalSearchBar);
};

const imgDel = (imgDel) => {
    return axios.put(`${SERVER}/page/imgDel`, imgDel);
};

export default { list, signin, signup, mypage, totalSearchBar, deleteSelect, imgDel, imgList };
