<template>
  <div class="layout ic-smooth-scroll">
    <div class="layout-content">
      <IcHeader closeMode />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import IcHeader from '@/components/partials/IcHeader'

export default {
  components: {
    IcHeader
  }
}
</script>
<style lang="postcss" scoped>
.layout {
  display: grid;
  grid-template-rows: 1fr;
}
.layout-content {
  @apply relative w-full h-auto;
}
</style>
