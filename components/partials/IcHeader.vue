<template>
  <nav class="main-header">
    <img
      src="/Logo-Imagine-Orange.png"
      alt="Imagine Cinema Logo"
      class="imagine-cinema-logo"
    >
    <client-only placeholder="Loading...">
      <div class="menu space-x-6 md:space-x-12">
        <ion-icon name="time-outline" class="menu-icon" />
        <ion-icon name="search-outline" class="menu-icon" />
        <ion-icon name="menu-outline" class="menu-icon" />
      </div>
    </client-only>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.main-header {
  @apply flex justify-between w-full mt-12 px-4 mb-24;
  height: 60px !important;
}

@screen lg {
  .main-header {
    @apply w-10/12 mx-auto px-0;
  }
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
