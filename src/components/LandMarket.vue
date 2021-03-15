<template>
  <div class="land-market">
    <div class="card">
      <h3 class="ml-3">
        FarmerRealty.com
      </h3>
      <options-to-buy class="m-3 p-2 bg-info" v-for="o in otbs" :options-to-buy-prop="o" :key="o.id" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'LandMarket',
  setup() {
    return {
      otbs: computed(() => AppState.optionsToBuy)

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
