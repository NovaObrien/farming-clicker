<template>
  <div class="event-modal">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#eventModal">
      EventTest
    </button>

    <!-- Modal -->
    <div class="modal fade"
         id="eventModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="eventModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row pb-3 border-bottom">
                {{ eventTitle }}
              </div>
              <div class="row">
                {{ eventText }}
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
