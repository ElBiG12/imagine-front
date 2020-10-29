<template>
  <div class="push-from-header">
    <div class="ic-container">
      <div class="head-title-block">
        <h1 class="pages-head-title">
          <span class="text-secondary">L’education a l’image </span> percutants
          qui se démarquent...
        </h1>

        <p class="pages-head-subtitle">
          Cinema imagine creates impactful Documentaries that help viewers ask the
          right questiosn and engage in various important discutions.
        </p>
      </div>
    </div>
    <div class="ic-container videos-block mt-40">
      <h5 class="videos-title">Les ciné club</h5>
      <div class="videos-container">
        <ThumbCard v-for="item in 3" :key="item" />
      </div>
    </div>
    <div class="ic-container videos-block mt-40">
      <h5 class="videos-title">Les formations</h5>
      <div class="videos-container">
        <ThumbCard v-for="item in 6" :key="item" />
      </div>
    </div>
    <div class="ic-container videos-block mt-40">
      <h5 class="videos-title">Leçons de cinéma</h5>
      <div class="videos-container">
        <ThumbCard v-for="item in 6" :key="item" />
      </div>
    </div>
    <div class="ic-container videos-block mt-12">
      <span></span>
      <div class="videos-container">
        <p class="loading-btn">Load more</p>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbCard from '@/components/card/ThumbCard'
export default {
  layout: 'nofooter',
  components: {
    ThumbCard
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

/* Videos block */
.videos-title {
  @apply text-lg;
}

.videos-block {
  display: grid;
  grid-template-columns: 1fr;
}

.videos-container {
  @apply grid grid-cols-1 gap-4;
}

@screen sm {
  .videos-container {
    @apply grid-cols-2 gap-6;
  }
}

@screen lg {
  .videos-block {
    grid-template-columns: 192px 1fr;
  }
}

@screen xl {
  .videos-container {
    @apply grid-cols-3 gap-x-8;
  }
}

.loading-btn {
  @apply text-lg font-bold text-center col-span-3 mt-32 mb-20;
}
</style>
