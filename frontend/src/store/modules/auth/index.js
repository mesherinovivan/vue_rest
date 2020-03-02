import actions from './actions';
import mutations from './mutations';

const data = {
    currentUser: {},
    currentUserToken: localStorage.getItem('token') || '',
    status: '',
};

const getters = {
    currentUser: state => state.currentUser,
    currentUserToken: state => state.currentUserToken,
    isLoggedIn: state => !!state.currentUserToken,
};

export default {
  namespaced: true,
  state: data,
  getters,
  actions,
  mutations,
};