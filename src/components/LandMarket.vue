<template>
  <div class="land-market">
    <div class="row">
      <div class="col prop-row overflow-auto bg-primary rounded shadow mx-3">
        <h3 class="ml-3">
          Current Market
        </h3>
        <options-to-buy class="m-3" v-for="o in otbs.smallFarms" :options-to-buy-prop="o" :key="o.id" />

        <options-to-buy class="m-3" v-for="o in otbs.mediumFarms" :options-to-buy-prop="o" :key="o.id" />

        <options-to-buy class="m-3" v-for="o in otbs.largeFarms" :options-to-buy-prop="o" :key="o.id" />

        <div class="col-12 text-center text-light p-2 " v-if="otbs.smallFarms.length === 0 && otbs.mediumFarms.length === 0 && otbs.largeFarms.length === 0">
          <h1 class="text-dark p-2 border">
            No Available Listings, Check back soon!
          </h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-4">
        <p class="hint ml-3">
          Hint: New Listings have a chance to show up every month! As well as leave... Don't Miss out!
        </p>
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
.prop-row{
  height: 63vh;
}
.hint{
color: rgb(107, 85, 24);
font-size: 13px;
}
</style>
