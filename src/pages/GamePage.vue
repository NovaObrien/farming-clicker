<template>
  <div class="game flex-grow-1 d-flex flex-column align-items-center justify-content-center">
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
import { timeService } from '../Services/TimeService'
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
      time: computed(() => AppState.time),
      incSeason() {
        timeService.changeSeason()
      }
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
