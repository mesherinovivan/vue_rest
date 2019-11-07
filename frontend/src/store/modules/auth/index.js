import actions from './actions';
import mutations from './mutations';

const data = {
  currentUser: null,
  currentUserToken: null,
};

const getters = {
  currentUser: state => state.currentUser,
  currentUserToken: state => state.currentUserToken,
};

export default {
  namespaced: true,
  state: data,
  getters,
  actions,
  mutations,
};