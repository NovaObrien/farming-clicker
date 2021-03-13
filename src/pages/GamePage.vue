<template>
  <div class="game flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <hay />
    <character />
    <button @click="incAge">
      Increase Age
    </button>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import Character from '../components/Character.vue'
import { loadState } from '../utils/LocalStorage'
import { seasonService } from '../Services/SeasonService'
export default {
  components: { Character },
  name: 'Game',
  setup() {
    onMounted(() => {
      loadState()
    })
    return {
      incAge() {
        seasonService.increaseAge()
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
