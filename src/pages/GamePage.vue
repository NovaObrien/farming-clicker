<template>
  <div class="game container-fluid">
    <land-market class="mt-3" />
    <hay />
    <h1>
      {{ time.month }}, {{ time.season }} {{ time.year }}
    </h1>
    <character />
    <turn />
    <event-modal />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { loadState } from '../utils/LocalStorage'
import { AppState } from '../AppState'
import { charactersService } from '../Services/CharactersService'

export default

{
  name: 'Game',
  setup() {
    onMounted(() => {
      loadState()
      if (AppState.character.name === '') {
        charactersService.genName()
      }
    })
    return {
      time: computed(() => AppState.time)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
