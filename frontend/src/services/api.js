import axios from 'axios'
import router from '../router';

const BASE_URL = 'http://localhost:8000/';


const api = new axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `JWT ${localStorage.getItem('JWT')}`,
  }
});

////// проверяте, если пришел ответ на запрос 401 то значит ошибка с токеном, нужно залогиниться сново
api.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.status === 401) {
    router.replace({
      path: '/login',
      query: { redirect: router.currentRoute.fullPath },
    });
  }
  return Promise.reject(error.response.data);
});
//// Добавляет в каждый запрос JWT token авторизации 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('JWT');
  if (token) config.headers.Authorization = `JWT ${localStorage.getItem('JWT')}`;
  return config
});


export default api;
