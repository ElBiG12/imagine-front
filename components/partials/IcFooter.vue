<template>
  <footer class="main-footer ic-container">
    <div>
      <p class="text-center">
        Footer links container
      </p>
    </div>
    <div class="corporate space-y-2 md:space-y-0 md:space-x-10">
      <img
        src="/Logo-Imagine-Orange.png"
        alt="Imagine Cinema Logo"
        class="imagine-cinema-logo"
      >
      <span class="text">
        Algérie 2020 © Imagine / Cinéma Mémoire & Kaïna Cinéma
      </span>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.main-footer {
  @apply grid grid-rows-2 gap-y-20 row-start-3 row-end-4 mt-32 pt-24 pb-20;
  border-top: 1px solid var(--color-light-grey);
}

.corporate {
  @apply flex flex-col justify-center items-center;
}

@screen md {
  .corporate {
    @apply flex-row;
  }
}

.corporate .text {
  font-size: 14px;
  font-weight: 500;
  font-style: Regular;
  text-align: center;
}

.imagine-cinema-logo {
  @apply h-8;
}
</style>
