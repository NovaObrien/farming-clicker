<template>
  <div class="game container-fluid">
    <options-to-buy v-for="o in otbs" :options-to-buy-prop="o" :key="o.id" />
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
import OptionsToBuy from '../components/OptionsToBuy.vue'

export default
{
  components: { OptionsToBuy },
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
      otbs: computed(() => AppState.optionsToBuy)
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
