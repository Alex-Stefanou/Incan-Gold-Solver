<template>
  <div>

    <div>
      <p>
        Welcome to the Incan Gold Solver which will help optimise your Incan Gold gameplay.<br>
        Features include probability of round ending, expected gems from next card, and score tracking for other players!<br>
        To get started select the number of players, and press start!
      </p>
    </div>

    <div id="startForm">
      <div class="field">
          <label>Number of Players: {{ numPlayers }}</label>
          <div class="slidecontainer">
            <input v-model="numPlayers"
              type="range" class="slider"
              min="2" max="8">
          </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      numPlayers: 4,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top: 10px;
}

p {
  line-height: 1.8em;
}

#startForm {
  margin: 1em 20vw 0em 20vw;
  padding: 0.5em;
  background-color: #424242;
  border: 6px solid rgb(15, 15, 15);
}

.slidecontainer{
  margin: auto;
  width: 70%;
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
</style>