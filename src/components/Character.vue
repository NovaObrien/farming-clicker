<template>
  <div class="character">
    <h1>Name: {{ character.name }}</h1>
    <h1>${{ character.currency }}</h1>
    <h1>Age: {{ character.age }}</h1>
    <h1>Kids: {{ character.children }}</h1>
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
