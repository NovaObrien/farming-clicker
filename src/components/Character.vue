<template>
  <div class="character ">
    <div class="row">
      <div class="col prop-row bg-primary overflow-auto rounded shadow mx-3">
        <div class="m-2 bg-secondary rounded p-2 border-light border">
          <h4 class="text-font mb-3">
            Welcome Back, {{ character.name }}
          </h4>
          <h5 class="pb-2">
            Available: {{ (character.currency).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }) }}
          </h5>

          <h5 class="pb-3">
            Credit: "Loans Disabled"
          </h5>

          <h5>Member Level: GOLD</h5>

          <h4 class="text-font pt-4">
            Personal Information:
          </h4>
          <h5 class="py-1">
            Birthday: March 1st, 1942
          </h5>
          <h5 class="py-1">
            Age: {{ character.age }}
          </h5>
          <h5 class="py-1">
            Children: {{ character.children }}
          </h5>
          <h5 class="py-1">
            Been a member for: {{ character.age - 28 }} Years!
          </h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-4">
        <p class="hint ml-3">
          Hint: We hope you enjoy the app!
        </p>
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
.prop-row{
  height: 57vh;
  border: solid var(--dark);
  border-width: 2px;
}
.hint{
color: rgb(107, 85, 24);
font-size: 13px;
}
.text-font{
  font-family: 'Merriweather', serif;
}
@media (min-height: 630px){
.prop-row{
  height: 63vh;
}
}
</style>
