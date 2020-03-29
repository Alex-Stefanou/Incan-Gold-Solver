<template>
  <div>

    <div>
      <p>
        Welcome to the Incan Gold Solver which will help optimise your Incan Gold gameplay.<br>
        Features include probability of round ending, expected gems from next card, and score tracking for other players!<br>
        To get started select the number of players, and press start!
      </p>
    </div>

    <div id="startform">
      <div class="field">
          <label>Number of Players: {{ numPlayers }}</label>
          <div class="slidecontainer">
            <input v-model="numPlayers"
              type="range" class="slider"
              min=2 max=8>
          </div>
        </div>

        <div class="field">
          <label>Artifact type:</label>
          <div class="radiocontainer">
            <input type="radio" class="radio" value=0 v-model="artifactType">
            <label title="Original Diamant style; no artifacts in the game">No Artifacts</label>
            
            <input type="radio" class="radio" value=1 v-model="artifactType">
            <label title="Classic Incan Gold; First three artifacts are worth 5, last two are worth 10">Fives and Tens</label>
            
            <input type="radio" class="radio" value=2 v-model="artifactType">
            <label title="Modern Incan Gold; Artifacts have fixed values: 5/7/8/10/12">Unique Values</label>
          </div>
        </div>

        <div>
          <label>Custom player names</label>
          <input type="checkbox" class="checkbox" v-model="customNames">
        </div>
        <div v-if="customNames">
          <ul v-for="(Name,i) in displayedNames" :key="i">
            <li><input type="text" v-bind="playerNames[i]"></li>
          </ul>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      artifactType: 2,
      customNames: false,
      displayedNames: [],
      playerNames: ["You","","","","","","",""],
      numPlayers: 4
    }
  },
  mounted() {
    this.displayNames();
  },
  methods: {
    displayNames() {
      this.displayedNames = [];
      for( var i=0; i<this.numPlayers; i++) {
        this.displayedNames.push(this.playerNames[i]);
      }
    }
  },
  watch: {
    numPlayers: function() {
      this.displayNames();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div {
  margin-top: 10px;
} */

p {
  line-height: 1.8em;
}

#startform {
  margin: 1em 15vw 0em 15vw;
  padding: 0.5em;
  background-color: #424242;
  border: 6px solid rgb(15, 15, 15);
  border-radius: 16px;;
}

.checkbox {
  vertical-align: middle;
  margin-left: 8px;
}

.slidecontainer {
  margin: auto;
  width: 60%;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #161616;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #161616;
  cursor: pointer;
}

.radiocontainer {
  width: 100%;
}
.radio{
  margin-left: 18px;
  margin-right: 4px;
}
</style>