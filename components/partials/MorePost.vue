<template>
    <div class="">
      <div v-if="withMoreButton" class="felx flex-col">
        <h4 class="text-lg font-medium mb-12">
          More from imagine
        </h4>
      </div>
      <div class="more-news-block">
        <div class="card-col-container">
          <HomeNewsCard tall />
          <HomeNewsCard tall />
        </div>
        <div class="card-col-container mt-16 sm:mt-32">
          <HomeNewsCard tall />
          <HomeNewsCard tall />
        </div>
      </div>
    </div>
</template>

<script>
import HomeNewsCard from '@/components/card/HomeNewsCard'

export default {
  props: {
    withMoreButton: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HomeNewsCard
  }
}
</script>

<style lang="postcss" scoped>

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
    @apply grid gap-x-32;
  }

  .more-news-block .card-col-container {
    @apply flex flex-col gap-y-24;
  }
}

@screen xl {
  .more-news-block {
    @apply grid gap-x-64;
  }

  .more-news-block .card-col-container {
    @apply flex flex-col gap-y-32;
  }
}
</style>
