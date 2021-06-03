<template>
  <div class="fruit-modal">
    <div class="text-font" data-toggle="modal" data-target="#fruitModal">
      <h6 class="fruit-btn">
        Plant Fruit
      </h6>
    </div>

    <div class="modal fade"
         id="fruitModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="fruitModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row d-flex justify-content-center pb-3 border-bottom">
                <h5 class="text-font text-dark">
                  Plant Fruit Trees
                </h5>
              </div>
              <div class="row d-flex justify-content-center my-3">
                Select a Fruit Tree to Plant:
              </div>
              <div class="row d-flex justify-content-around">
                <div class="div"
                     v-for="f in fruits"
                     :key="f.id"
                >
                  <h5
                    class="p-1 border rounded"
                    :class="f.selected == true ?'text-success border-success' : 'text-danger border-danger'"
                    @click="setActive(f.id)"
                  >
                    {{ f.title }}
                  </h5>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <!-- {{ fruit[0].type }} -->
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center">
                  <i class="fas fa-home"></i>
                </div>
              </div>
              <div class="row">
                <div class="col">
                </div>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button type="button" class="btn btn-success" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { farmService } from '../Services/FarmService'
export default {
  name: 'FruitModal',
  setup() {
    return {
      fruits: computed(() => AppState.fruits),

      setActive(id) {
        farmService.setActiveFruit(id)
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

.fa-home{
  font-size: 25px;
}
</style>
