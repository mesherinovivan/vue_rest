export default {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.currentUserToken = token;
      state.currentUser = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
    setCurrentUserToken(state, data) {
      state.currentUserToken = data;
    },
};