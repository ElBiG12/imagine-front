<template>
  <div class="ic-main-layout ic-smooth-scroll">
    <div class="layout-content">
      <IcHeader />
      <Nuxt />
    </div>
    <IcFooter />
  </div>
</template>
<script>
import IcHeader from '@/components/partials/IcHeader'
import IcFooter from '@/components/partials/IcFooter'

export default {
  components: {
    IcHeader,
    IcFooter
  }
}
</script>
<style lang="postcss" scoped>
.container {
  @apply mx-auto;
}

.layout-content {
  @apply relative w-full h-auto;
}
</style>
