<template>
  <div id="app">
    <button id="reset" class="button">Reset</button>
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
  compute: {
    inGame: function() {
      if (this.$store.getters.gameRound === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";

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