<template>
  <div id="app">
    <button @click="reset()" id="reset" class="button">Reset</button>
    <h1>Incan Gold Solver</h1>

    <Home v-if="inGame != true"></Home>

    <GameSolver v-if="inGame == true"></GameSolver>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import GameSolver from './components/GameSolver.vue'

export default {
  name: 'App',
  components: {
    GameSolver,
    Home
  },
  computed: {
    inGame: function() {
      if (this.$store.getters.gameRound === 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    reset: function() {
      this.$store.commit("resetApp")
    }
  }
}
</script>

<style>
html, body {
  background-color: #262626; /*Replace with my mexico pics*/
  color: #8cb3d9;
}

h1 {
  padding-left: 2.2em;
  font-size: 2em;
  font-weight: 600;
}

#app {
  margin: 12px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#reset {
  float: right;
}
</style>