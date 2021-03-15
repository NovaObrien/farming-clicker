<template>
  <div class="owned-land-menu">
    <div class="row">
      <div class="col">
        <owned-land v-for="own in ownedLands" :owned-land-prop="own" :key="own.id" />
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

</style>
