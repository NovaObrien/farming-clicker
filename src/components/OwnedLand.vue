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
          <div class="col" :class="season !== 'Winter' ? 'text-black' : 'text-gray'">
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

        <!-- Set Home Active -->
        <button class="btn" :class="owned.active.home == true ? 'text-success' : 'text-danger'" @click="setHome(owned)">
          <i class="fas fa-house-user"></i>
        </button>

        <button class="btn" :class="owned.active.workers == true ? 'text-success' : 'text-danger'" @click="hireHelpingHands(owned)">
          <i class="fas fa-user-plus"></i>
        </button>
      </div>

      <div class="col-4 mt-3">
        <button class="btn btn-sm btn-danger rounded" @click="sellProperty(owned)">
          Appraise
        </button>
      </div>
      <div class="col-4 mt-3">
        <button class="btn btn-sm btn-success" @click="harvest(owned)">
          Harvest
        </button>
      </div>
      <div class="col-4 mt-3">
        <button class="btn btn-sm btn-light" @click="tend(owned)" v-if="season !== 'Winter'">
          Tend
        </button>
        <button class="btn-sm btn-gray" v-else>
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
import { saveState } from '../utils/LocalStorage'
export default {
  name: 'OwnedLand',
  props: {
    ownedLandProp: Object
  },
  setup(props) {
    return {
      owned: props.ownedLandProp,
      currentYearCost: computed(() => AppState.currentYearCost),
      season: computed(() => AppState.time.season),

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
      },
      harvest(owned) {
        farmService.harvest(owned)
      },
      setHome(owned) {
        Swal.fire({
          title: 'Make Active Home?',
          text: 'Are you Sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#39af43',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Thank you for confirming',
              'Welcome to your new place',
              'success'
            )
            farmService.setHome(owned)
            saveState()
          }
        }
        )
      },
      hireHelpingHands(owned) {
        // TODO add monthly costs
        if (owned.active.workers === false) {
          Swal.fire({
            title: 'Hire Helping Hands?',
            text: 'Are you Sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#39af43',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Thank you for confirming',
                'Your workers will still need direction',
                'success'
              )
              farmService.hireHelpingHands(owned)
              saveState()
            }
          }
          )
        } else {
          Swal.fire({
            title: 'Fire Helping Hands?',
            text: 'Are you Sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#39af43',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Thank you for confirming',
                'You can always hire them back!',
                'success'
              )
              farmService.hireHelpingHands(owned)
              saveState()
            }
          }
          )
        }
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
  .btn-gray{
    color: grey;
    border: solid 1px;
  }

  .text-gray{
    color: grey;
  }
  .text-black{
    color: black;
  }
</style>
