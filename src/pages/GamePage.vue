<template>
  <div class="game flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <hay />
    <h1>
      {{ season }}
    </h1>
    <character />
    <button @click="incAge">
      Age Up
    </button>

    <button @click="incSeason">
      Change Season
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import Character from '../components/Character.vue'
import { loadState } from '../utils/LocalStorage'
import { seasonService } from '../Services/SeasonService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  components: { Character },
  name: 'Game',
  setup() {
    onMounted(() => {
      loadState()
    })
    return {
      season: computed(() => AppState.season),
      incAge() {
        seasonService.increaseAge()
      },
      incSeason() {
        seasonService.changeSeason()
        logger.log(AppState.season)
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
