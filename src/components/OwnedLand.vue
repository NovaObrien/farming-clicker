<template>
  <div class="owned-land">
    {{ owned.name }}
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
