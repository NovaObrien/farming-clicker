<template>
  <div class="character">
    <h1>Age: {{ character.age }}</h1>
    <h1>Kids: {{ character.children }}</h1>
    <h1>Name: {{ character.name }}</h1>
    <!-- <button @click="genName">
      GenerateName
    </button> -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
// import { charactersService } from '../Services/CharactersService'
export default {
  name: 'Character',
  setup() {
    return {
      character: computed(() => AppState.character)
      // genName() {
      //   charactersService.genName()
      // }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
