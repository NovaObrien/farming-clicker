<template>
  <div class="options-to-buy">
    <div class="row bg-secondary rounded shadow-lg border border-light px-1 py-3">
      <div class="col-12">
        <h5 class="text-font">
          {{ option.name }}
        </h5>
      </div>
      <div class="col-6 ml-2">
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
            {{ option.type }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            {{ (option.acers * currentYearCost.acerCost + option.beds * currentYearCost.bedCost).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }) }}
          </div>
        </div>
      </div>
      <div class="col ml-3">
        <div class="row">
          <img src="https://via.placeholder.com/75C/O https://placeholder.com/"
               alt=""
          >
        </div>
        <div class="row mt-3">
          <button class="btn btn-success border-primary" @click="purchaseLand(option)">
            Purchase
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { optionToBuyService } from '../Services/OptionToBuyService'
import Swal from 'sweetalert2'
import { charactersService } from '../Services/CharactersService'
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
            const money = AppState.character.currency
            const yearCost = AppState.currentYearCost
            const cost = option.acers * yearCost.acerCost + option.beds * yearCost.bedCost
            if (money < cost) {
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
            charactersService.addMonthlyCosts(option)
          }
        })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.text-font{
    font-family: 'Merriweather', serif;
  }
</style>
