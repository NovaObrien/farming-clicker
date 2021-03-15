<template>
  <div class="game container-fluid">
    <div class="row d-flex justify-content-center py-1 bg-secondary">
      <h5>
        {{ time.month }}, {{ time.season }} {{ time.year }}
      </h5>
    </div>
    <div class="row">
      <div class="col-3 rounded-top bg-info ml-3 mt-2" @click="showAccount">
        <h6>
          Account
        </h6>
      </div>
      <div class="col-3 rounded-top bg-info ml-3 mt-2" @click="showManage">
        <h6>
          Manage
        </h6>
      </div>
      <div class="col-3 rounded-top bg-info ml-3 mt-2" @click="showRealEstate">
        <h6>
          Real Estate
        </h6>
      </div>
    </div>
    <land-market class="mx-3" :class="state.hideRealEstate.truthy == true ? 'hide-content' : 'show-content'" />
    <owned-land-menu :class="state.hideManage.truthy == true ? 'hide-content' : 'show-content'" />
    <!-- <hay /> -->
    <character :class="state.hideAccount.truthy == true ? 'hide-content' : 'show-content'" />

    <event-modal />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { loadState } from '../utils/LocalStorage'
import { AppState } from '../AppState'
import { charactersService } from '../Services/CharactersService'

export default

{
  name: 'Game',
  setup() {
    const state = reactive({
      hideAccount: {
        truthy: false
      },
      hideRealEstate: {
        truthy: true
      },
      hideManage: {
        truthy: true
      }

    })
    onMounted(() => {
      loadState()
      if (AppState.character.name === '') {
        charactersService.genName()
      }
    })
    return {
      state,
      time: computed(() => AppState.time),
      showAccount() {
        state.hideAccount.truthy = false
        state.hideRealEstate.truthy = true
        state.hideManage.truthy = true
      },
      showManage() {
        state.hideManage.truthy = false
        state.hideRealEstate.truthy = true
        state.hideAccount.truthy = true
      },
      showRealEstate() {
        state.hideRealEstate.truthy = false
        state.hideAccount.truthy = true
        state.hideManage.truthy = true
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
.hide-content{
  display: none;
}
.show-content{
  display: inherit;
}

</style>
