<template>
  <div class="play-button">
    <img src="/icons/play-icon.svg" alt="play" class="play-icon" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.play-button {
  position: relative;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 50%;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;

  max-width: 32px;

  @apply transform origin-left -translate-x-1/2 -translate-y-1/2;
}

@screen md {
  .play-button {
    width: 150px;
    height: 150px;
  }

  .play-icon {
    max-width: 40px;
  }
}
</style>
