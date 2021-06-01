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
              <ul>
                <li class="pt-3">
                  Need some land? Check out the Listings Tab
                </li>
                <li class="pt-3">
                  Land and home vaules increase Yearly.
                </li>
                <li class="pt-3">
                  New listings have a chance to show up every month! As well as leave... Don't miss out!
                </li>
                <li class="pt-3">
                  Tractors help improve the quality of your harvestables, dont forget to add them to a farm
                </li>
                <li class="pt-3">
                  From everyone at Farming Manager Co. Thank you
                </li>
              </ul>
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
