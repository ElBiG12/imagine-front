<template>
  <div class="ic-main-layout">
    <IcHeader />
    <Nuxt />
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
</style>
