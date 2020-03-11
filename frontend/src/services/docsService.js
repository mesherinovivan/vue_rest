import api from '@/services/api'

export default {
  fetchDocsTemplates() {
    return api.get(`api/v1/templates/`)
              .then(response => response.data);
              
  },
}