import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username : "",
    token : null
  },
  mutations: {
    USER_LOGIN:(state, data)=>{
      state.username = data.username;
      state.token = data.token;
    }
  },
  actions: {
    userLogin:({commit}, data)=>{
      commit ('USER_LOGIN', data);
    }
  },
  modules: {
  }
})
