import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import auth from "./auth.js";
import users from "./users.js";
export default new Vuex.Store({
  state: {
    drawer:false,
    active:null
  },
  mutations: {
    SET_DRAWER: (state,bool) => {
      state.drawer = bool
    },
    SET_ACTIVE: (state, number) => {
      state.active = number
    }
  },
  actions: {
    setDrawer({commit}, bool){
      commit('SET_DRAWER',bool)
    },
    setActive({commit}, number){
      commit('SET_ACTIVE', number)
    }
  },
  modules: {
    auth,
    users
  }
})
