<template>
  <div class="turn">
    <button class="btn btn-warning" @click="endTurn">
      Next Month
    </button>
  </div>
</template>

<script>
import { timeService } from '../Services/TimeService'
import { turnService } from '../Services/TurnService'
export default {
  name: 'Turn',
  setup() {
    return {
      endTurn() {
        timeService.endTurn()
        turnService.endTurn()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
