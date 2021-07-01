<template>
  <div class="settings">
    <button class="btn" @click="openSettings()">
      <i class="fas fa-cog"></i>
    </button>
    <div class="settings-menu rounded" id="setting">
      <button class="btn btn-danger m-3" @click="newGame()">
        New Game?
      </button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { reactive } from 'vue'
export default {
  name: 'Settings',
  setup() {
    const state = reactive({
      open: false
    })
    return {
      state,
      openSettings() {
        if (state.open === false) {
          document.getElementById('setting').style.height = '50%'
          document.getElementById('setting').style.border = 'solid'
          state.open = true
        } else {
          document.getElementById('setting').style.height = '0%'
          document.getElementById('setting').style.borderWidth = 0

          state.open = false
        }
      },
      newGame() {
        Swal.fire({
          title: 'Start New Game?',
          text: 'THIS WILL DELETE YOUR CURRENT GAME',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#39af43',
          confirmButtonText: 'DELETE'
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.clear()
            window.location.reload()
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
.fa-cog{
  font-size: 25px;
  color: var(--light);
}
.fa-cog:hover{
  color: var(--info)
}
.settings-menu{
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  position: absolute;
  z-index: 1;
  left: 12px;
  bottom: 9Vh;
  background-color: var(--info);
  border: var(--dark);
  height: 0%;
  width: 35%;
  overflow-x: hidden;
  transition: 0.25s;
}
</style>
