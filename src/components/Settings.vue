<template>
  <div class="settings">
    <i class="fas fa-cog"></i>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  setup() {
    return {}
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
</style>
