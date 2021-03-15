<template>
  <div class="land-market">
    <div class="row">
      <div class="col bg-light shadow">
        <h3 class="ml-3">
          FarmerRealty.com
        </h3>
        <options-to-buy class="m-3" v-for="o in otbs" :options-to-buy-prop="o" :key="o.id" />
      </div>
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
