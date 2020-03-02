import Cookies from 'js-cookie'

const state = {
  isOpen: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
}

const getters = {
  isOpen: state => {
    return state.isOpen
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.isOpen = !state.isOpen
    if (state.isOpen) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state) => {
    Cookies.set('sidebarStatus', 0)
    state.isOpen = false
  },
}

const actions = {

  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }) {
    commit('CLOSE_SIDEBAR')
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}