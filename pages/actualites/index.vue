<template>
  <div class="push-from-header">
    <div class="ic-container">
      <div class="head-title-block">
        <h1 class="pages-head-title">
          <span class="text-secondary">Des Actualités </span> sont un moyen
          simple de vous aider à briser les barrières de votre propre
          créativité.
        </h1>

        <p class="pages-head-subtitle">
          Cinema imagine creates impactful Master classes that help cinema
          lovers learn and apply their aquired knowledge to create impactful
          content.
        </p>
      </div>
    </div>
    <MorePost class="ic-container my-48" withMoreButton />
  </div>
</template>

<script>
import MorePost from '@/components/partials/MorePost'
import SmoothScroll from '~/mixins/SmoothScroll.js'

export default {
  mixins: [SmoothScroll],
  components: {
    MorePost
  }
}
</script>

<style lang="postcss" scoped>
.head-title-block {
  @apply w-full mx-auto flex flex-col;
}

@screen lg {
  .head-title-block {
    @apply w-8/12;
  }
}

.more-news-block {
  @apply grid grid-cols-1 gap-x-24 px-0;
}

.more-news-block .card-col-container {
  @apply flex flex-col gap-y-16;
}

@screen sm {
  .more-news-block {
    @apply grid-cols-2 gap-x-16;
  }
}

@screen md {
  .more-news-block {
    @apply grid-cols-2 gap-x-24;
  }
}

@screen lg {
  .more-news-block {
    @apply grid gap-x-32 px-8;
  }

  .more-news-block .card-col-container {
    @apply flex flex-col gap-y-24;
  }
}

@screen xl {
  .more-news-block {
    @apply grid gap-x-48 px-8;
  }

  .more-news-block .card-col-container {
    @apply flex flex-col gap-y-32;
  }
}
</style>
