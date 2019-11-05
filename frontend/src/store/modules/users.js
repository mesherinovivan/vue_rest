import userService from '../../services/userService'

const state = {
  users: []
}

const getters = {
  users: state => {
    return state.users
  }
}

const actions = {
  getUsers ({ commit }) {
    userService.fetchUsers()
    .then(users => {
      commit('setUsers', users)
    })
  },
  addUsers({ commit }, user) {
    userService.postUser(user)
    .then(() => {
      commit('addUser', user)
    })
  },
  deleteUser( { commit }, userId) {
    userService.deleteUser(userId)
    commit('deleteUser', userId)
  }
}

const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  addUser(state, user) {
    state.users.push(user)
  },
  deleteUser(state, userId) {
    state.users = state.users.filter(obj => obj.pk !== userId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}