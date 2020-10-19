<template>
  <nav class="absolute-header">
    <div class="main-header">
      <nuxt-link
        tag="img"
        to="/"
        src="/Logo-Imagine-Orange.png"
        alt="Imagine Cinema Logo"
        class="imagine-cinema-logo cursor-pointer"
      />
      <client-only placeholder="Loading...">
        <div class="menu space-x-6 md:space-x-12">
          <ion-icon name="time-outline" class="menu-icon" />
          <ion-icon name="search-outline" class="menu-icon" />
          <ion-icon name="menu-outline" class="menu-icon" />
        </div>
      </client-only>
    </div>
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

.absolute-header {
  @apply absolute w-full z-50;
  height: 200px;
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
