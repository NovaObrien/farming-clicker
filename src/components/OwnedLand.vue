<template>
  <div class="owned-land  bg-secondary rounded shadow-lg border border-light mx-1 pl-4 py-3">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <h5 class="text-font">
            {{ owned.name }}
          </h5>
        </div>

        <div class="row">
          <div class="col">
            Beds: {{ owned.beds }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            Acers: {{ owned.acers }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            Type: {{ owned.type }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            Tended: {{ owned.tended }} / {{ owned.acers }}
          </div>
        </div>
        <div class="row">
          <div class="col">
            Quality: {{ owned.quality }}
          </div>
        </div>
      </div>

      <div class="col-4">
        <button class="btn" :class="owned.tractorActive == true ? 'text-success' : 'text-danger'" @click="setTractor(owned)">
          <i class="fas fa-tractor"></i>
        </button>
        <make-home />
        <helping-hands />
      </div>

      <div class="col-4 mt-3">
        <button class="btn btn-sm btn-danger rounded" @click="sellProperty(owned)">
          Appraise
        </button>
      </div>
      <div class="col-4 mt-3">
        <button class="btn btn-sm btn-success">
          Harvest
        </button>
      </div>
      <div class="col-4 mt-3">
        <button class="btn btn-sm btn-light" @click="tend(owned)">
          Tend
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Swal from 'sweetalert2'
import { optionToBuyService } from '../Services/OptionToBuyService'
import { farmService } from '../Services/FarmService'
export default {
  name: 'OwnedLand',
  props: {
    ownedLandProp: Object
  },
  setup(props) {
    return {
      owned: props.ownedLandProp,
      currentYearCost: computed(() => AppState.currentYearCost),

      sellProperty(owned) {
        const cost = (owned.acers * this.currentYearCost.acerCost + owned.beds * this.currentYearCost.bedCost) * 0.8
        Swal.fire({
          title: 'Sell Property?',
          text: 'Your Farm has Been Appraised at ' + cost.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          }) + ' Do you want to place it on the Market?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#39af43',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, sell!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Thank you for confirming',
              'Your property has been sold!',
              'success'
            )
            farmService.returnTractor(owned)
            optionToBuyService.sellLand(owned)
          }
        }
        )
      },
      setTractor(owned) {
        farmService.setTractor(owned)
      },
      tend(owned) {
        farmService.tend(owned)
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
