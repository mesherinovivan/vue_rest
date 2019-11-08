import axios from 'axios'
import router from '../router';

const BASE_URL = 'http://localhost:8000/';


const api = new axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `JWT ${localStorage.getItem('JWT')}`,
  }
});

api.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.status === 401) {
    router.replace({
      path: '/login',
      query: { redirect: router.currentRoute.fullPath },
    });
  }
  return Promise.reject(error.response.data);
});

export default api;
