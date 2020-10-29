<template>
  <div class="push-from-header">
    <div class="ic-container">
      <div class="head-title-block">
        <h1 class="pages-head-title">
          Nous créons des
          <span class="text-secondary">Collection thématique </span> percutantes
          qui se démarquent...
        </h1>

        <p class="pages-head-subtitle">
          Cinema imagine creates impactful Documentaries that help viewers ask the
          right questiosn and engage in various important discutions.
        </p>
      </div>
    </div>
    <div class="ic-container flex flex-col gap-y-16">
      <PostCard />
      <PostCard reversed/>
      <PostCard />
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/card/PostCard'
export default {
  components: {
    PostCard
  }
}
</script>

<style lang="postcss" scoped>
.head-title-block {
  @apply w-full flex flex-col mx-auto;
}

@screen lg {
  .head-title-block {
    @apply w-8/12;
  }
}
</style>
