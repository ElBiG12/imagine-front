<template>
  <div class="ic-main-layout" data-scroll-container>
    <div class="content">
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

.content {
  @apply relative w-full h-auto;
}
</style>
