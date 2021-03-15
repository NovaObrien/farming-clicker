<template>
  <div class="event-modal">
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div class="modal fade"
         id="eventModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="eventModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row d-flex justify-content-center pb-3 border-bottom">
                {{ event.title }}
              </div>
              <div class="row pb-3">
                {{ event.greeting }}
              </div>
              <div class="row d-flex justify-content-center">
                {{ event.text }}
              </div>
              <div class="row pt-3">
                {{ event.closing }}
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-warning" data-dismiss="modal">
              {{ event.closeDesc }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'EventModal',
  setup() {
    return {
      event: computed(() => AppState.event)

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
