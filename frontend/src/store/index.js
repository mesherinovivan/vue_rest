import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import auth from './modules/auth'
import sidebar from './modules/sidebar'
import docs from './modules/docs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    auth,
    sidebar,
    docs
  }
})