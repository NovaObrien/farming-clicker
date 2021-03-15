<template>
  <div class="character bg-light shadow">
    <div class="row">
      <div class="col m-2">
        <h3 class="mb-3">
          Welcome Back {{ character.name }}
        </h3>
        <h4>
          Available {{ (character.currency).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          }) }}
        </h4>
        <h4>Credit: "Loans Disabled"</h4>
        <h3 class="mt-5">
          About You:
        </h3>
        <h5 class="my-3">
          You've been a member for {{ character.age - 28 }} Years!
        </h5>
        <h5>You're {{ character.age }} years old</h5>
        <h5 class="my-3">
          You have {{ character.children }} children
        </h5>
        <h5 class="mb-3">
          Your birthday is March 1st
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Character',
  setup() {
    return {

      character: computed(() => AppState.character)

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
