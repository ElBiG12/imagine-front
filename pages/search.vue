<template>
  <div class="search-page">
    <div class="ic-container">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-4">
      <div class="sm:col-span-5 md:col-span-4">
        <input
          id="default"
          type="text"
          name="default"
          placeholder="Entrez votre requette de recherche"
          class="w-full"
        />
      </div>
      <div class="sm:col-span-5 md:col-span-1">
        <button class="btn">Search</button>
      </div>
      </div>
    </div>
    <div class="ic-container">
      <h3 class="mt-16 mb-8">Résultats</h3>
    </div>
    <div class="ic-container">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-16">
        <ThumbCard v-for="item in 9" :key="item" />
      </div>
    </div>
  </div>
</template>

<script scoped>
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
.btn {
    border-radius: 0;
    border-width: 1px;
    --border-opacity: 1;
    border-color: #000;
    border-color: rgba(0, 0, 0, var(--border-opacity));
    border-style: solid;
    font-size: .875rem;
    line-height: 1.5;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    transition-property: background-color, border-color, color, fill, stroke;
    transition-duration: 200ms;
    padding: 0.625rem 2.125rem;
    width: 100%;
}
</style>
