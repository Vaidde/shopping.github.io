//將API統一管理
import requests from './request';

//發請求，原本應是api/product/getBaseCategoryList，
//但我們axios 二次封裝時有 baseURL: '/api'了，所以這就不用/api
export const reqCategoryList = () =>
    requests({ url: '/product/getBaseCategoryList', method: 'get' });
