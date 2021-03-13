<template>
  <div class="turn">
    <button class="btn btn-warning" @click="endTurn">
      Next Month
    </button>
  </div>
</template>

<script>
import { timeService } from '../Services/TimeService'
export default {
  name: 'Turn',
  setup() {
    return {
      endTurn() {
        timeService.endTurn()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
