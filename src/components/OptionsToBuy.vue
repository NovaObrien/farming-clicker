<template>
  <div class="options-to-buy">
    <div class="row p-1">
      <div class="col">
        <div class="row">
          <h6>
            {{ option.name }}
          </h6>
        </div>
        <div class="row ml-2">
          {{ option.beds }} Beds
        </div>
        <div class="row ml-2">
          {{ option.type }}, {{ option.acers }} Acers
        </div>
        <div class="row ml-2">
          cost {{ (option.acers * currentYearCost + option.beds * 2000).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          }) }}
        </div>
      </div>
      <div class="col">
        <button class="btn btn-sm btn-warning ml-auto" @click="purchaseLand(option)">
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { optionToBuyService } from '../Services/OptionToBuyService'
export default {
  name: 'OptionsToBuy',
  props: {
    optionsToBuyProp: Object
  },
  setup(props) {
    return {
      option: props.optionsToBuyProp,
      currentYearCost: computed(() => AppState.currentyearCost),
      purchaseLand(option) {
        optionToBuyService.purchaseLand(option)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
