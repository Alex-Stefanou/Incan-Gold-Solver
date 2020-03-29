import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    gameRound: 0, // 0 = homescreen, 6 = endscreen
    numPlayers: 4,
    playerNames: [],
    deck: {artifacts: [], hazards: [], treasure: []}
  },

  mutations: {
    resetApp (state) {
      state.GameRound = 0;
      console.log("Application has been reset");
    },
  },

  getters: {
    gameRound: state => state.gameRound,
  },
})