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
      state.gameRound = 0;
      console.log("Application has been reset");
    },
    nextRound (state) {
      state.gameRound++;
      console.log("incrementing round");
    }
  },

  getters: {
    gameRound: state => state.gameRound,
  },
})