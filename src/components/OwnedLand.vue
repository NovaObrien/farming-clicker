<template>
  <div class="owned-land">
    <div class="row">
      <div class="col bg-light shadow">
        <h5>Manage</h5>
        {{ owned.name }}
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
