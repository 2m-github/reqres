import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import auth from "./auth.js";
export default new Vuex.Store({
  state: {
    drawer:false
  },
  mutations: {
    SET_DRAWER: (state,bool) => {
      state.drawer = bool
    }
  },
  actions: {
    setDrawer({commit}, bool){
      commit('SET_DRAWER',bool)
    }
  },
  modules: {
    auth
  }
})
