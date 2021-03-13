<template>
  <div class="options-to-buy">
    <div class="row">
      <div class="col">
        {{ options }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsToBuy',
  props: {
    optionsToBuy: Object
  },
  setup(props) {
    return {
      options: props.optionsToBuy
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
