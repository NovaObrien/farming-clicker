<template>
  <div class="make-home">
    <button class="btn" @click="setHome">
      <i class="fas fa-house-user"></i>
    </button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'MakeHome',
  setup() {
    return {
      setHome() {
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
            // optionToBuyService.sellLand(owned)
          }
        }
        )
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
