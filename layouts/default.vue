<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '@/components/partials/header'
export default {
  components: {
    Header
  }
}
</script>
<style lang="postcss" scoped>
.container {
  @apply mx-auto;
}
</style>
