

import docsService from '../../services/docsService'

const state = {
  templates: [],
  htmlForm: ""
}

const getters = {
  templates: state => {
    return state.templates
  },
  htmlForm: state => {
    return state.htmlForm
  }
}

const actions = {
  getTemplates ({ commit }) {
    docsService.fetchDocsTemplates()
    .then(templates => {
      commit('setTemplates', templates)
    })
  },
  getHtmlForm ({ commit },id) {
      commit('setHtmlForm', `<div>${id}</div>`);
  },
}

const mutations = {
  setTemplates (state, templates) {
    state.templates = templates
  },
  setHtmlForm (state, htmlForm) {
    state.htmlForm = htmlForm
  },
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}