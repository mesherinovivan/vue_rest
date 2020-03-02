import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import auth from './modules/auth/index'
import sidebar from './modules/sidebar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    auth,
    sidebar
  }
})