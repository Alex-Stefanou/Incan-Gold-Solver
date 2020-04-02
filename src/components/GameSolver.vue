<template>
  <div>

    <div class="columns">
      <DrawCard></DrawCard>
      <Path></Path>
    </div>

    <div class="columns">
      <pDeath></pDeath>
      <pTreasure></pTreasure>
      <RemovedCards></RemovedCards>
      <AddedCards></AddedCards>
    </div>

    <div class="columns">
      <PlayerInfo></PlayerInfo>
      <ScoreBoard></ScoreBoard>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GameSolver',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>