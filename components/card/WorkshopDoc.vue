<template>
  <div class="down-doc-btn">
    <a href="#" class="btn"> Download worshop documents </a>
    <div class="filter-wrapper"></div>
    <img
      src="/img/download-worksho-bg.png"
      alt="download workshop document"
      class="img-bg"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.down-doc-btn {
  @apply flex justify-end items-center p-12 relative overflow-hidden;
  height: 148px;
  background: linear-gradient(
    270deg,
    #ffffff 36.17%,
    rgba(255, 255, 255, 0) 100%
  );
}
.down-doc-btn .btn {
  @apply z-20;
}

.filter-wrapper {
  @apply absolute top-0 left-0 bottom-0 right-0 overflow-hidden z-10;
  background: linear-gradient(
    270deg,
    #ffffff 36.17%,
    rgba(255, 255, 255, 0) 100%
  );
}

.img-bg {
  @apply absolute top-0 left-0 object-cover min-w-full min-h-full z-0;
}
</style>
