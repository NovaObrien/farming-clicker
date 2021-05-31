<template>
  <div class="options-to-buy">
    <div class="row bg-secondary rounded shadow-lg border border-light px-2 py-3">
      <div class="col-12">
        <h5>
          {{ option.name }}
        </h5>
      </div>
      <div class="col ml-2">
        <div class="row">
          <div class="col">
            Beds: {{ option.beds }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            Acers: {{ option.acers }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            Type: {{ option.type }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            Cost: {{ (option.acers * currentYearCost + option.beds * 2000).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }) }}
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-end ml-3">
        <button class="btn btn-success border-primary" @click="purchaseLand(option)">
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

</style>
