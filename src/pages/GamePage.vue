<template>
  <div class="game container-fluid">
    <div class="row d-flex justify-content-center mb-3 bg-secondary border-bottom border-info text-font pt-1">
      <h5>
        {{ time.month }}, {{ time.season }} {{ time.year }}
      </h5>
    </div>
    <div class="row">
      <div class="col rounded-top ml-4" :class="state.hideAccount.truthy == true ? 'not-selected' : 'selected'" @click="showAccount">
        <h6 class="mt-2">
          Account
        </h6>
      </div>
      <div class="col rounded-top mx-1" :class="state.hideManage.truthy == true ? 'not-selected' : 'selected'" @click="showManage">
        <h6 class="mt-2">
          Manage
        </h6>
      </div>
      <div class="col rounded-top mr-4" :class="state.hideRealEstate.truthy == true ? 'not-selected' : 'selected'" @click="showRealEstate">
        <h6 class="mt-2">
          Listings
        </h6>
      </div>
    </div>

    <land-market :class="state.hideRealEstate.truthy == true ? 'hide-content' : 'show-content'" />
    <owned-land-menu :class="state.hideManage.truthy == true ? 'hide-content' : 'show-content'" />
    <!-- <hay /> -->
    <character :class="state.hideAccount.truthy == true ? 'hide-content' : 'show-content'" />

    <event-modal />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { loadState, saveState } from '../utils/LocalStorage'
import { AppState } from '../AppState'
import { charactersService } from '../Services/CharactersService'
import { eventService } from '../Services/EventService'

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
      // Checks if player name is emphty may need to refactor the check
      if (AppState.character.name === '') {
        charactersService.genName()
        eventService.inherEvent()
        saveState()
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
h6{
  font-size: 14px;
}
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
.not-selected{
  background-color: var(--primary);
  border: solid var(--info);
  border-width: 1px 2px 0 2px;
  margin-top: 10px;
}
.selected{
  color: var(--light);
  background-color: var(--info);
  border: solid var(--dark);
  border-width: 1px 2px 0 2px;
}
.text-font{
  font-family: 'Merriweather', serif;
}
</style>
