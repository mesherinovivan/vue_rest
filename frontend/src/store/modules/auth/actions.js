import router from '@/router';
import api from '../../../services/api' ;

export default {
  login({ commit }, credentials) {
    api.post('auth/obtain_token/', {
        username: credentials.username, 
        password: credentials.password,
    }).then((data) => {
              commit('setCurrentUser', credentials.username);        
              commit('setCurrentUserToken', data.data.token);
              localStorage.setItem('JWT', data.data.token);
              localStorage.setItem('username', credentials.username);
              router.push('/dashboard');
        }).catch(() => {
          
      });
  }
};