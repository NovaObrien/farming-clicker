<template>
  <div class="owned-land bg-secondary rounded shadow-lg border border-light px-2 py-3">
    <div class="row ">
      <div class="col-9">
        <h5 class="text-font">
          {{ owned.name }}
        </h5>
      </div>
      <div class="col-3">
        <button class="btn" :class="owned.tractorActive == true ? 'text-success' : 'text-danger'" @click="setTractor(owned)">
          <i class="fas fa-tractor"></i>
        </button>
      </div>
      <div class="col ml-2">
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
        <!-- <div class="row mt-3">
          <button class="btn btn-sm btn-danger rounded" @click="sellProperty(owned)">
            Appraise
          </button>
        </div> -->
      </div>
      <div class="col">
        <div class="row">
          <img src="https://via.placeholder.com/75C/O https://placeholder.com/"
               alt=""
          >
        </div>
        <div class="row pt-3" :v-if="owned.type === 'Fruit'">
          <fruit-modal />
        </div>
      </div>
      <!-- TODO we are going to need to add a way to sell owned properties, make a property your home and sell products during the last month of a season. also Add hellping hands to lands that you arent living at -->
    </div>
    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-sm btn-danger rounded" @click="sellProperty(owned)">
          Appraise
        </button>
      </div>
      <div class="col">
        <button class="btn btn-sm btn-success">
          Harvest
        </button>
      </div>
      <div class="col">
        <button class="btn btn-sm btn-light">
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
            optionToBuyService.sellLand(owned)
          }
        }
        )
      },
      setTractor(owned) {
        farmService.setTractor(owned)
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
