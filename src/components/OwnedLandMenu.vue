<template>
  <div class="owned-land-menu">
    <div class="row">
      <div class="col mx-3 prop-row overflow-auto bg-primary rounded shadow">
        <div class="row">
          <div class="col-3">
            <i class="fas fa-tractor text-green"></i>
            {{ tractors }}
          </div>
          <div class="col">
            <p>
              Monthly Costs: {{ costs.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              }) }}
            </p>
            <p>
              Able to Harvest: {{ harvestables }}
            </p>
          </div>
        </div>
        <fruit-modal />
        <div class="slidecontainer">
          <p>Cattle per Acer, {{ cattlePerAcer }}</p>
          <input type="range"
                 min="1"
                 max="4"
                 :value="{cattlePerAcer}"
                 class="slider"
                 id="myRange"
          >
        </div>

        <owned-land class="my-3" v-for="own in ownedLands" :owned-land-prop="own" :key="own.id" />
        <div class="col-12 text-center text-light p-2 " v-if="ownedLands.length === 0">
          <h1 class="text-dark p-2 border">
            Aquire Property to Use This Feature
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'OwnedLandMenu',
  setup() {
    return {
      ownedLands: computed(() => AppState.ownedLands),
      tractors: computed(() => AppState.tractors),
      costs: computed(() => AppState.monthlyCosts),
      harvestables: computed(() => AppState.time.harvestables),
      cattlePerAcer: computed(() => AppState.cattlePerAcer)
    }
  }
}
</script>

<style lang="scss" scoped>
.prop-row{
  height: 67vh;
  border: solid var(--dark);
  border-width: 2px;
}
.hint{
color: rgb(107, 85, 24);
font-size: 13px;
}
.text-green{
  color: rgb(51, 97, 53);
}
@media (min-height: 630px){
.prop-row{
  height: 73vh;
}
}
p{
  font-size: 14px;
}

.slidecontainer {
  width: 50%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 15px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #0d3a29; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>
