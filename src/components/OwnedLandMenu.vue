<template>
  <div class="owned-land-menu">
    <div class="row">
      <div class="col mx-3 prop-row overflow-auto bg-primary rounded shadow">
        <owned-land v-for="own in ownedLands" :owned-land-prop="own" :key="own.id" />
        <div class="col-12 text-center text-light p-2 " v-if="ownedLands.length === 0">
          <h1 class="text-dark p-2 border">
            Aquire Property to Use This Feature
          </h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5">
        <p class="hint ml-3">
          Hint: Need Some Land? Check out the Real Estate Tab
        </p>
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
      ownedLands: computed(() => AppState.ownedLands)
    }
  }
}
</script>

<style lang="scss" scoped>
.hint{
color: rgb(107, 85, 24);
font-size: 13px;
}
.prop-row{
  height: 63vh;
}
</style>
