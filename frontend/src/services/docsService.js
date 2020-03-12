import api from '@/services/api'

export default {
  fetchDocsTemplates() {
    return api.get(`api/v1/templates/`)
              .then(response => response.data);
              
  },
  getHtmlForm(id) {
    return api.get(`api/v1/templates/get-html/${id}`)
              .then(response => response.data.html);
              
  },
  download(id,payload) {
    return api.post(`api/v1/templates/download/${id}/`, payload)
              .then(response => response.data.link)
  },
}