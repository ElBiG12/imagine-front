<template>
  <div class="home-doc-card">
    <div class="img-wrapper">
      <img src="/img/home-doc-slider.png" alt="" />
      <div class="blend"></div>
    </div>
    <div class="content-wrapper">
      <h2 class="title">
        An auto biography
      </h2>
      <p class="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et augue mauris a vulputate.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.home-doc-card {
  @apply relative w-full;
  @apply cursor-pointer no-underline;
  @apply transition-all duration-150 ease-linear;
}

.home-doc-card .img-wrapper {
  position: relative;
  padding-top: calc(260 / 434 * 100%);
}

.home-doc-card .img-wrapper img {
  @apply absolute top-0 left-0 min-w-full min-h-full h-auto;
}

.home-doc-card .img-wrapper .blend {
  @apply absolute top-0 left-0 w-full h-full;
  background: rgba(77, 77, 77, 0.35);
  background-blend-mode: multiply;
}

.content-wrapper {
  @apply absolute top-0 left-0 bottom-0 right-0;
  @apply flex flex-col justify-end p-8;
}

.content-wrapper .title {
  @apply text-2xl font-bold text-white mb-4;
}

.content-wrapper .subtitle {
  @apply text-lg font-medium text-white;
}

@screen lg {
  .home-doc-card {
    @apply w-1/2 !important;
  }
}

@screen xl {
  .home-doc-card {
    @apply w-1/3 !important;
  }
}
</style>
