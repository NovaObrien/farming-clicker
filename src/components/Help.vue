<template>
  <div class="help">
    <div class="text-font" data-toggle="modal" data-target="#helpModal">
      <h6 class="help-btn">
        Help
      </h6>
    </div>

    <div class="modal fade"
         id="helpModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="helpModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row d-flex justify-content-center pb-3 border-bottom">
                <h5 class="text-font text-dark">
                  Help
                </h5>
              </div>
              <div class="row pb-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, velit.
              </div>
              <div class="row d-flex justify-content-center">
              </div>
              <div class="row pt-3">
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-success" data-dismiss="modal">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.text-font{
  font-family: 'Merriweather', serif;
}
.help-btn{
  color: var(--light);

}

.help-btn:hover{
  color: var(--info);
}
</style>
