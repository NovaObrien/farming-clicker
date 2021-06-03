<template>
  <div class="fruit-modal">
    <div class="text-font" data-toggle="modal" data-target="#fruitModal">
      <h6 class="fruit-btn">
        Fruit Tree Layout
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
                Select a type of Fruit Tree to Plant:
              </div>
              <div class="row d-flex justify-content-around">
                <div class="div"
                     v-for="f in fruits"
                     :key="f.id"
                >
                  <h5
                    class="p-1 border rounded"
                    :class="f.selected == true ?'text-success border-success' : 'text-danger border-danger'"
                    @click="setActive(f)"
                  >
                    {{ f.title }}
                  </h5>
                </div>
              </div>
              <div class="row mt-4">
                <p class="text-center">
                  Then design the optimal layout for next years harvest:
                </p>
              </div>
              <div class="row d-flex justify-content-center mt-4">
                <div class="plot mx-3 border-right border-bottom border-dark" @click="plantFruit(0)">
                  <p>
                    {{ plantedFruit[0].title }}
                  </p>
                </div>
                <div class="plot mx-3 border-left border-bottom border-dark"
                     @click="plantFruit(1)"
                >
                  <p>
                    {{ plantedFruit[1].title }}
                  </p>
                </div>
              </div>
              <div class="
                     row"
              >
                <div class="col d-flex justify-content-center">
                  <i class="fas fa-home"></i>
                </div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="plot mx-3 border-right border-top border-dark"
                     @click="plantFruit(2)"
                >
                  <p>
                    {{ plantedFruit[2].title }}
                  </p>
                </div>
                <div class="plot mx-3 border-left border-top border-dark" @click="plantFruit(3)">
                  <p>
                    {{ plantedFruit[3].title }}
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center mt-5">
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
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { farmService } from '../Services/FarmService'
export default {
  name: 'FruitModal',
  setup() {
    const state = reactive({
      selectedFruit: 'Emphty'
    })
    return {
      state,
      fruits: computed(() => AppState.fruits),
      plantedFruit: computed(() => AppState.plantedFruit),

      setActive(fruit) {
        farmService.setActiveFruit(fruit.id)
        state.selectedFruit = fruit.title
      },
      plantFruit(id) {
        farmService.plantFruit(id, state.selectedFruit)
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
  font-size: 35px;
}

.plot{
  height: 3em;
  widows: 15px;
  padding: 10px;
}

</style>
