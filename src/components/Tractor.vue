<template>
  <div class="tractor">
    <div class="row bg-secondary rounded shadow-lg border border-light px-1 py-1">
      <div class="col-12">
      </div>
      <div class="col-6 ml-2">
        <div class="row">
          <h5 class="text-font">
            Tractor
          </h5>
        </div>
        <div class="row">
          <div class="col">
            $15,000.00
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-info">
              Tractor Co.
            </p>
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
          <button class="btn btn-success border-primary" @click="purchaseTractor">
            Purchase
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { AppState } from '../AppState'
import { optionToBuyService } from '../Services/OptionToBuyService'
export default {
  name: 'Tractor',
  setup() {
    return {
      purchaseTractor() {
        Swal.fire({
          title: 'Purchase Tractor?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#39af43',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, purchase!'
        }).then((result) => {
          if (result.isConfirmed) {
            const cost = 15000
            if (AppState.character.currency < cost) {
              Swal.fire({

                title: 'Insufficient funds',
                text: 'Please check your available balance in the account tab',
                icon: 'error'
              }
              )
            } else {
              Swal.fire(
                'Purchase Complete!',
                'Don\'t forget to assign it to a farm!',
                'success'
              )
            }
            optionToBuyService.purchaseTractor()
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
