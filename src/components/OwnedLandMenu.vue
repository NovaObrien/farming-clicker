<template>
  <div class="owned-land-menu">
    <div class="row">
      <div class="col mx-3 prop-row overflow-auto bg-primary rounded shadow">
        <div class="row">
          <div class="col-3">
            <i class="fas fa-tractor text-green"></i>
            {{ tractors }}
          </div>
          <div class="col">
            <p>
              Monthly Costs: {{ costs.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              }) }}
            </p>
          </div>
        </div>
        <owned-land class="m-3" v-for="own in ownedLands" :owned-land-prop="own" :key="own.id" />
        <div class="col-12 text-center text-light p-2 " v-if="ownedLands.length === 0">
          <h1 class="text-dark p-2 border">
            Aquire Property to Use This Feature
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'OwnedLandMenu',
  setup() {
    return {
      ownedLands: computed(() => AppState.ownedLands),
      tractors: computed(() => AppState.character.tractors),
      costs: computed(() => AppState.monthlyCosts)
    }
  }
}
</script>

<style lang="scss" scoped>
.prop-row{
  height: 67vh;
  border: solid var(--dark);
  border-width: 2px;
}
.hint{
color: rgb(107, 85, 24);
font-size: 13px;
}
.text-green{
  color: rgb(51, 97, 53);
}
@media (min-height: 630px){
.prop-row{
  height: 73vh;
}
}
p{
  font-size: 14px;
}
</style>
