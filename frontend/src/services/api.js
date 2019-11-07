import axios from 'axios'


const BASE_URL = 'http://localhost:8000/';


const api = new axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `JWT ${localStorage.getItem('JWT')}`,
  }
});


export default api;
