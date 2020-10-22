<template>
  <div class="films-page push-from-header">
    <div class="head-title-block">
      <h1 class="pages-head-title">
        Nous créons des
        <span class="text-secondary">Documentaires</span> percutants qui se
        démarquent...
      </h1>

      <p class="pages-head-subtitle">
        Cinema imagine creates impactful Documentaries that help viewers ask the
        right questiosn and engage in various important discutions.
      </p>
    </div>
    <div class="ic-container search-block">
      <div class="search-bar">
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
      <div class="filters">
        <div class="filter-section">
          <h5 class="filter-title">Cinéma</h5>
          <div class="filter-inputs">
            <div class="ic-checkbox" v-for="item in 12" :key="item">
              <input
                type="checkbox"
                :id="'cfilter' + item"
                :name="'cfilter' + item"
                value="Bike"
              />
              <label :for="'cfilter' + item">Aliquet nisl Aliquet nisl.</label
              ><br />
            </div>
          </div>
        </div>
        <span class="vertical-divide"></span>
        <div class="filter-section">
          <h5 class="filter-title">Social</h5>
          <div class="filter-inputs">
            <div class="ic-checkbox" v-for="item in 12" :key="item">
              <input
                type="checkbox"
                :id="'filter' + item"
                :name="'filter' + item"
                value="Bike"
              />
              <label :for="'filter' + item">Aliquet nisl.</label><br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ic-container videos-block mt-40">
      <h5 class="videos-title">Recently added</h5>
      <div class="videos-container">
        <ThumbCard v-for="item in 3" :key="item" />
      </div>
    </div>
    <div class="ic-container videos-block mt-20 items-center">
      <h5 class="videos-title">Algerian cinéma</h5>
      <hr class="border-alt-light-grey">
    </div>
    <div class="ic-container videos-block mt-12">
      <span></span>
      <div class="videos-container">
        <ThumbCard v-for="item in 3" :key="item" />
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

.search-block {
  @apply mb-8 mt-32;
}

.search-block .search-bar {
  @apply flex flex-row gap-6;
}

.search-block .filters {
  @apply flex flex-col gap-6 w-full;
}

.filters .filter-section {
  @apply flex flex-col mt-10 w-full;
}

.filters .filter-section .filter-title {
  @apply text-lg font-light mb-8;
}

.filters .filter-section .filter-inputs {
  @apply grid grid-cols-1;
}

@screen sm {
  .search-block .filters {
    @apply flex flex-col gap-6 w-full;
  }

  .filters .filter-section .filter-inputs {
    @apply grid grid-cols-2 gap-4;
  }
}

@screen md {
  .search-block .filters {
    @apply flex flex-col;
  }

  .filters .filter-section .filter-inputs {
    @apply grid grid-cols-3;
  }
}

@screen xl {
  .search-block .filters {
    @apply flex flex-row flex-no-wrap;
  }

  .filters .filter-section .filter-inputs {
    @apply grid grid-cols-3;
  }
}

.vertical-divide {
  @apply h-40 self-end hidden mx-12 my-2;
  width: 1px;
  background-color: #d6d4d3;
}

@screen xl {
  .vertical-divide {
    @apply block;
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
