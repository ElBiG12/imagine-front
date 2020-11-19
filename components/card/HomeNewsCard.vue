<template>
  <a href="" class="news-card" :class="{tall: tall}">
    <div v-if="isReadMore" class="readmore-img-wrapper">
      <img src="/img/home-news-readmore.png" alt="" />
    </div>
    <div v-else class="img-wrapper">
      <img src="https://images.unsplash.com/photo-1532264523420-881a47db012d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
    </div>
    <span v-if="isReadMore">
      <p class="link link-primary mt-4">
        Read more
      </p>
    </span>
    <span v-else>
      <h2 class="title">A sound form you can see, not just hear.</h2>
      <p class="subtitle" v-if="!tall">A sound form you can see, not just hear.</p>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    isReadMore: {
      default: false,
      type: Boolean
    },
    tall: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="postcss" scoped>
.news-card {
  @apply flex flex-col w-full;
  @apply cursor-pointer no-underline;
  @apply transition-all duration-150 ease-linear;
}

.img-wrapper {
  position: relative;
  padding-top: calc(267 / 418 * 100%);
  @apply mb-4;
}

.tall .img-wrapper {
  position: relative;
  padding-top: calc(632 / 418 * 100%);
  @apply mb-4;
}

.readmore-img-wrapper {
  position: relative;
  padding-top: calc(267 / 418 * 100%);
  @apply mb-4;
}

.img-wrapper img {
  @apply absolute bottom-0 left-0 min-w-full w-auto min-h-full object-cover;
}

.readmore-img-wrapper img {
  @apply absolute top-0 left-0 min-w-full w-auto min-h-full object-cover;
}

.news-card .title {
  @apply text-xl font-bold my-4;
}

.news-card .subtitle {
  @apply text-base;
}

@screen sm {
  .news-card .title {
    @apply text-2xl font-bold my-4;
  }

  .news-card .subtitle {
    @apply text-lg;
  }
}

@screen md {
  .news-card {
    /* @apply w-1/2; */
  }

  .news-card .title {
    @apply text-2xl font-bold my-4;
  }

  .news-card .subtitle {
    @apply text-lg;
  }
}

@screen lg {
  .news-card {
    /* @apply w-1/3; */
  }
}
</style>
