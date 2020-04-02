import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    coreDeck: [],
    gameRound: 0, // 0 = homescreen, 6 = endscreen
    numPlayers: 4,
    playerNames: [],
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
    resetDeck (state) {
      function Treasure(value) {
        this.type = "treasure",
        this.value = value
      }
      function Hazard(catagory) {
        this.type = "hazard",
        this.catagory = catagory
      }
      state.deck = [
        new Treasure(17), new Treasure(15), new Treasure(14), new Treasure(13),
        new Treasure(11), new Treasure(11), new Treasure(9),  new Treasure(7),  new Treasure(7),  new Treasure(5),  new Treasure(5),
        new Treasure(4),  new Treasure(3),  new Treasure(2),  new Treasure(1),
        new Hazard("fire"), new Hazard("fire"), new Hazard("fire"),
        new Hazard("mummy"), new Hazard("mummy"), new Hazard("mummy"),
        new Hazard("rocks"), new Hazard("rocks"), new Hazard("rocks"),
        new Hazard("snake"), new Hazard("snake"), new Hazard("snake"),
        new Hazard("spider"), new Hazard("spider"), new Hazard("spider")
      ];
    },
    setArtifactType (state, artifactType) {
      state.artifactType = artifactType;
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