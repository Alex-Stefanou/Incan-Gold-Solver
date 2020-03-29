import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    appState: "home",
  },

  mutations: {
    resetApp (state) {
      state.appState = "home";
      console.log("Application has been reset");
    },
  },

  getters: {
    appState: state => state.appState,
  },
})