<template>
  <div class="options-to-buy">
    {{ option.name }} Beds {{ option.beds }} {{ option.type }} Acers {{ option.acers }} cost {{ (option.acers * currentYearCost + option.beds * 2000).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    }) }}
    <button class="btn btn-sm btn-warning d-flex" @click="purchaseLand(option)">
      Purchase
    </button>
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
