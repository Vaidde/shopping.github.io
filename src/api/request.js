//將axios進行二次封裝
import axios from 'axios';

//引入載入進度的進度條
import nprogress from 'nprogress';
//引入進度條樣式
import 'nprogress/nprogress.css';

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
});

//請求攔截器
requests.interceptors.request.use((config) => {
    nprogress.start();
    return config;
});
//響應攔截器
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('faile'));
});

export default requests;