<template>
  <div class="owned-land">
    <div class="row">
      <div class="col bg-light shadow">
        <h5>Manage</h5>
        {{ owned.name }}

        <!-- TODO we are going to need to add a way to sell owned properties, make a property your home and sell products during the last month of a season. -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwnedLand',
  props: {
    ownedLandProp: Object
  },
  setup(props) {
    return {
      owned: props.ownedLandProp
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
