<template>
  <nav class="absolute-header">
    <div class="main-header ic-container">
      <nuxt-link
        tag="img"
        to="/"
        src="/Logo-Imagine-Orange.png"
        alt="Imagine Cinema Logo"
        class="imagine-cinema-logo cursor-pointer"
      />
      <div v-if="closeMode">
        <button @click="$router.back()" class="btn btn-alt">Fermer</button>
      </div>
      <div v-else class="menu space-x-6 md:space-x-12">
        <nuxt-link tag="ion-icon" to="/search" name="search-outline" class="menu-icon" />
        <ion-icon name="menu-outline" class="menu-icon" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    closeMode: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.main-header {
  @apply flex justify-between mt-12 mb-24;
  height: 60px !important;
}

.absolute-header {
  @apply absolute w-full flex justify-center z-50;
  height: 200px;
}

.imagine-cinema-logo {
  @apply max-h-full;
}

.menu {
  @apply flex h-full items-center justify-end;
}
.menu > .menu-icon {
  font-size: 28px;
}
</style>
