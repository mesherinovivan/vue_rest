

import docsService from '../../services/docsService'

const state = {
  templates: [],
  htmlForm: "",
  link: ""
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
    docsService.getHtmlForm(id)
    .then(html => {
      commit('setHtmlForm', html);
    })
  },
  download({ commit },payload) {
    docsService.download(payload[0],payload[1])
    .then(link => {
      commit('setLink', link);
    });
  },
}

const mutations = {
  setTemplates (state, templates) {
    state.templates = templates
  },
  setLink (state, link) {
    state.link = link
  },
  setHtmlForm (state, htmlForm) {
    state.htmlForm = htmlForm.replace(
      /\{\{(\w+)\}\}/g,
      '<input ref="$1" placeholder="$1">'
    );
  },
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}