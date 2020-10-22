<template>
  <a href="" class="thumb-card">
    <div class="img-wrapper">
      <img src="/img/home-news.png" alt="" />
    </div>
    <h2 class="title">The first Documentary</h2>
    <p class="subtitle">24 hours ago</p>
  </a>
</template>

<script>
export default {
  props: {
    isReadMore: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="postcss" scoped>
.thumb-card {
  @apply flex flex-col w-full;
  @apply cursor-pointer no-underline;
  @apply transition-all duration-150 ease-linear;
}

.img-wrapper {
  position: relative;
  padding-top: calc(222 / 330 * 100%);
}

.img-wrapper img {
  @apply absolute bottom-0 left-0 w-full h-auto;
}

.thumb-card .title {
  @apply text-lg leading-none mb-3 mt-4;
}

.thumb-card .subtitle {
  @apply text-sm leading-none;
  letter-spacing: 0.33em;
  font-feature-settings: 'liga' off;
  color: #8F9BA3;
}

@screen sm {
  .thumb-card .title {
    @apply text-lg leading-none mb-3 mt-4;
  }

  .thumb-card .subtitle {
    @apply text-sm;
  }
}

@screen md {
  .thumb-card .title {
    @apply text-lg leading-none mb-3 mt-4;
  }

  .thumb-card .subtitle {
    @apply text-sm;
  }
}
</style>
