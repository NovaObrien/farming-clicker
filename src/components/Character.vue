<template>
  <div class="character bg-primary rounded shadow">
    <div class="row">
      <div class="col ml-4 m-2">
        <u>
          <h3 class="mb-3">
            Welcome Back, {{ character.name }}
          </h3>
        </u>
        <h4 class="pb-2">
          Available: {{ (character.currency).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          }) }}
        </h4>

        <h4 class="pb-3">
          Credit: "Loans Disabled"
        </h4>

        <h4>Member Level: GOLD</h4>

        <u>
          <h3 class="pt-3">
            Profile:
          </h3>
        </u>
        <h5 class="py-3">
          Birthday: March 1st, 1942
        </h5>
        <h5 class="py-3">
          Been a member for: {{ character.age - 28 }} Years!
        </h5>
        <h5 class="py-3">
          Age: {{ character.age }}
        </h5>
        <h5 class="py-3">
          Children: {{ character.children }}
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
