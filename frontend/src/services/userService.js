import api from '@/services/api'

export default {
  fetchUsers() {
    return api.get(`http://127.0.0.1:8000/api/v1/presonal/users/`)
              .then(response => response.data)
  },
  postUser(payload) {
    return api.post(`http://127.0.0.1:8000/api/v1/presonal/users/`, payload)
              .then(response => response.data)
  },
  deleteUser(userId) {
    return api.delete(`http://127.0.0.1:8000/api/v1/presonal/users/${userId}`)
              .then(response => response.data)
  }
}