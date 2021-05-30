<template>
  <div class="owned-land-menu">
    <div class="row">
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col mx-3 prop-row overflow-auto bg-primary rounded">
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
        <u class="re-link">
          <p>
            Need Some Land? Click here for Listings!
          </p>
        </u>
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
.re-link{
color: rgb(107, 85, 24);
}
.re-link:hover{
  color: darkgray;
}
.prop-row{
  height: 60vh;
}
</style>
