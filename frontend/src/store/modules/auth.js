import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
  } from "../actions/auth";

////import router from '@/router';
import api from '../../services/api' ;


const state = {
    token: localStorage.getItem("JWT") || "",
    status: "",
    hasLoadedOnce: false
  };
  
const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    token: state => state.token,
};

const actions = {
    [AUTH_REQUEST]:({ commit }, credentials) => {
        return new Promise((resolve, reject) => {
          commit(AUTH_REQUEST)
            api.post('auth/obtain_token/', {
                username: credentials.username, 
                password: credentials.password,
            }).then((data) => {      
                        commit(AUTH_SUCCESS, data.data.token);
                        localStorage.setItem('JWT', data.data.token);
                        api.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem('JWT')}`
                        resolve(data);
                        

            }).catch(err => {
                commit(AUTH_ERROR, err)
                localStorage.removeItem('JWT')
                reject(err)
            });
        })
      },
    [AUTH_LOGOUT]: ({ commit }) => {
        return new Promise(resolve => {
          commit(AUTH_LOGOUT);
          localStorage.removeItem("JWT");
          resolve();
        });
      }
};
const mutations = {
    [AUTH_REQUEST]: state => {
      state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, resp) => {
      state.status = "success";
      state.token = resp.token;
      state.hasLoadedOnce = true;
    },
    [AUTH_ERROR]: state => {
      state.status = "error";
      state.hasLoadedOnce = true;
    },
    [AUTH_LOGOUT]: state => {
      state.token = "";
    }
};
export default {
  state,
  getters,
  actions,
  mutations,
};

