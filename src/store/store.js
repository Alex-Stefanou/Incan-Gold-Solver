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
    nextRound (state) {
      state.gameRound++;
      console.log("incrementing round");
    },
    resetApp (state) {
      state.gameRound = 0;
      console.log("Application has been reset");
    },
    setArtifactType (state, artifactType) {
      state.artifactType = artifactType;
    },
    setDefaultNames (state) {
      for (var player=0; player<state.numPlayers; player++) {
        state.playerNames[player] = "Player "+(player+1);
      }
    },
    setNames (state, Name) {
      let playerNumber = 0
      for (var player=0; player<state.numPlayers; player++) {
        if (Name[player] === "") {
          playerNumber++;
          state.playerNames[player] = "Player "+playerNumber;
        } else {
          state.playerNames[player] = Name[player];
        }
      }
    },
    setNumPlayers (state, numPlayers) {
      state.numPlayers = numPlayers;
    }

  },

  getters: {
    playerNames: state => state.playerNames,
    gameRound: state => state.gameRound,
  },
})