<template>
  <div class="layout smooth-scroll" data-scroll-container>
    <div class="content">
      <IcHeader />
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
.content {
  @apply relative w-full h-auto;
}
</style>
