<template>
  <div>

    <div class="columns">

      <div class="column">
        <DrawCard></DrawCard>
        <RoundLog></RoundLog>
      </div>

      <div class="column">
        <pDeath></pDeath>
        <pTreasure></pTreasure>
        <RemovedCards></RemovedCards>
        <AddedCards></AddedCards>
      </div>

      <div class="columm">
        <PlayerInfo></PlayerInfo>
        <ScoreBoard></ScoreBoard>
      </div>

    </div>

  </div>
</template>

<script>
import AddedCards   from './SolverComponents/AddedCards.vue'
import DrawCard     from './SolverComponents/DrawCard.vue'
import PlayerInfo   from './SolverComponents/PlayerInfo.vue'
import pDeath       from './SolverComponents/pDeath.vue'
import pTreasure    from './SolverComponents/pTreasure.vue'
import RemovedCards from './SolverComponents/RemovedCards.vue'
import RoundLog     from './SolverComponents/RoundLog.vue'
import ScoreBoard   from './SolverComponents/ScoreBoard.vue'

export default {
  name: 'GameSolver',
  components: {
    AddedCards,
    DrawCard,
    PlayerInfo,
    pDeath,
    pTreasure,
    RemovedCards,
    RoundLog,
    ScoreBoard
  },
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