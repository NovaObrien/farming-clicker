<template>
  <div class="tractor">
    <div class="row bg-secondary rounded shadow-lg border border-light px-2 py-3">
      <div class="col">
        <div class="row">
          <h5 class="text-font">
            Tractor
          </h5>
        </div>
        <div class="row">
          <div class="col">
            price: $15,000.00
            Seller:
            <p class="text-info">
              Tractor Co.
            </p>
          </div>
        </div>
      </div>
      <div class="col mx-3">
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
import { logger } from '../utils/Logger'
export default {
  name: 'Tractor',
  setup() {
    return {
      purchaseTractor() {
        logger.log('PurchasedTractor')
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
