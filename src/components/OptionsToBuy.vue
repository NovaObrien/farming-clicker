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
          Cost {{ (option.acers * currentYearCost + option.beds * 2000).toLocaleString('en-US', {
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
import Swal from 'sweetalert2'
export default {
  name: 'OptionsToBuy',
  props: {
    optionsToBuyProp: Object
  },
  setup(props) {
    return {
      option: props.optionsToBuyProp,
      currentYearCost: computed(() => AppState.currentYearCost),
      purchaseLand(option) {
        Swal.fire({
          title: 'Purchase Property?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#39af43',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, purchase!'
        }).then((result) => {
          if (result.isConfirmed) {
            const cost = option.acers * AppState.currentYearCost + option.beds * 2000
            if (AppState.character.currency < cost) {
              Swal.fire({

                title: 'Insufficient funds',
                text: 'Please check your available balance in the account tab',
                icon: 'error'
              }
              )
            } else {
              Swal.fire(
                'Thanks for your acquistion',
                'Check out your new property in the manage tab!',
                'success'
              )
            }
            optionToBuyService.purchaseLand(option)
          }
        })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.c{
  color: #39af43;
}
</style>
