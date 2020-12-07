<template>
  <footer class="main-footer ic-container">
    <div
      class="grid grid-cols-1 gap-y-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
    >
      <div class="footer-links">
        <p class="links-title">Projet Imagine</p>
        <ul class="links space-y-10">
          <nuxt-link to="/imagine" tag="li"> Imagine </nuxt-link>
          <nuxt-link to="" tag="li"> Atelier </nuxt-link>
          <nuxt-link to="/collection-thematique" tag="li">
            Collection Thémathique
          </nuxt-link>
          <nuxt-link to="" tag="li"> Masterclass </nuxt-link>
        </ul>
      </div>
      <div class="footer-links">
        <p class="links-title">Qui nous Sommes</p>
        <ul class="links space-y-10">
          <nuxt-link to="/actualites" tag="li"> Actualités </nuxt-link>
          <nuxt-link to="/notre-histoire" tag="li"> Notre Histoire </nuxt-link>
          <nuxt-link to="/films" tag="li"> Les films </nuxt-link>
          <nuxt-link to="/contact" tag="li"> Contact </nuxt-link>
        </ul>
      </div>
      <div class="footer-links">
        <p class="links-title">Éductation a l’image</p>
        <ul class="links space-y-10">
          <nuxt-link to="/education-a-l-image" tag="li">
            Education a l’image
          </nuxt-link>
        </ul>
      </div>
      <div class="footer-links md:col-span-3 xl:col-span-2">
        <p class="links-title">Stay updated</p>
        <div class="grid grid-cols-5 gap-y-8 gap-x-8">
          <div class="col-span-5 md:col-span-3 flex items-end">
            <input
              id="newsletter"
              type="text"
              name="newsletter"
              class="w-full"
              placeholder="Enter your email"
            />
          </div>
          <div class="col-span-5 md:col-span-2 flex items-end">
            <button class="btn">Susbscribe now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="corporate space-y-2 md:space-y-0 md:space-x-10">
      <img
        src="/Logo-Imagine-Orange.png"
        alt="Imagine Cinema Logo"
        class="imagine-cinema-logo"
      />
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
  @apply grid grid-rows-2 mt-32 pt-24;
  border-top: 1px solid var(--color-light-grey);
  grid-template-rows: 1fr auto;
}

.corporate {
  @apply flex flex-col justify-center items-center py-32;
  max-height: 500px;
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

.footer-links .links-title {
  @apply text-dark-grey font-light text-lg leading-3;
  @apply mb-12;
}

.footer-links .links {
}

.footer-links .links li {
  @apply font-medium text-base leading-3;
  @apply transition-colors duration-200;
  @apply cursor-pointer;
}

.footer-links .links li:hover {
  @apply text-secondary;
}
</style>
