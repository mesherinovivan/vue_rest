import api from '@/services/api'

export default {
  fetchUsers() {
    return api.get(`api/v1/presonal/users/`)
              .then(response => response.data);
              
  },
  postUser(payload) {
    return api.post(`api/v1/presonal/users/`, payload)
              .then(response => response.data)
  },
  deleteUser(userId) {
    return api.delete(`api/v1/presonal/users/${userId}`)
              .then(response => response.data)
  }
}