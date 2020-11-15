<template>
  <div class="search-page">
    <div class="ic-container my-8 flex flex-row gap-6">
      <div class="flex-1">
        <input
          id="default"
          type="text"
          name="default"
          placeholder="Entrez votre requette de recherche"
          class="w-full"
        />
      </div>
      <div class="">
        <button class="btn">Search</button>
      </div>
    </div>
    <div class="ic-container">
      <h3 class="mt-16 mb-8">Résultats</h3>
    </div>
    <div class="ic-container">
      <div class="result-container">
        <ThumbCard v-for="item in 9" :key="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ThumbCard from '@/components/card/ThumbCard'
import SmoothScroll from '~/mixins/SmoothScroll.js'

export default {
  mixins: [SmoothScroll],
  layout: 'search',
  components: {
    ThumbCard
  }
}
</script>

<style lang="postcss" scoped>
.search-page {
  margin-top: 200px;
  @apply pb-24 min-h-screen;
}

.result-container {
  @apply grid grid-cols-3 gap-8;
}
</style>
