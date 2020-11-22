<template>
  <div class="layout ic-smooth-scroll">
    <div class="layout-content">
      <IcHeader data-scroll-section />
      <Nuxt data-scroll-section />
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

.viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* .ic-smooth-scroll {
  position: absolute;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
} */
</style>
