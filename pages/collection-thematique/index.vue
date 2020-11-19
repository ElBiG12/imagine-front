<template>
  <div class="ic-container push-from-header">
    <div class="ic-container">
      <div class="head-title-block">
        <h1 class="pages-head-title">
          Nous créons des
          <span class="text-secondary">Collection thématique </span> percutantes
          qui se démarquent...
        </h1>

        <p class="pages-head-subtitle">
          Cinema imagine creates impactful Documentaries that help viewers ask
          the right questiosn and engage in various important discutions.
        </p>
      </div>
    </div>
    <div class="ic-container flex flex-col gap-y-64 mt-64">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="" data-scroll data-scroll-speed="1">
          <img
            src="https://images.unsplash.com/photo-1499720843949-d9e6f318dca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="title"
          />
        </div>
        <div class="marge">
          <div data-scroll data-scroll-speed="3">
            <h2 class="card-title pt-6 sm: translate-x-0">
              This is just a title
            </h2>
          </div>

          <p class="pt-24" data-scroll data-scroll-speed="4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            inventore vitae hic earum provident. Quae adipisci repellat
            assumenda minus debitis, iusto veritatis! Suscipit blanditiis,
            facilis ea vel animi exercitationem itaque.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="title-cn marge">
          <div class="text-right pb-10 " data-scroll data-scroll-speed="3">
            <h2 class="card-title-rev sm:text-left md:text-right pt-6">
              This is just a title
            </h2>
          </div>
          <p class="pt-24 text-right" data-scroll data-scroll-speed="4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            inventore vitae hic earum provident. Quae adipisci repellat
            assumenda minus debitis, iusto veritatis! Suscipit blanditiis,
            facilis ea vel animi exercitationem itaque.
          </p>
        </div>
        <div class="" data-scroll data-scroll-speed="1">
          <img
            src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="title"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="" data-scroll data-scroll-speed="1">
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="title"
          />
        </div>
        <div class="marge">
          <div data-scroll data-scroll-speed="4">
            <h2 class="card-title pt-6">An Encouter with Colors</h2>
          </div>

          <p
            class="pt-24"
            data-scroll
            data-scroll-speed="3"
            data-scroll-offset-bottom="25%, 15%"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            inventore vitae hic earum provident. Quae adipisci repellat
            assumenda minus debitis, iusto veritatis! Suscipit blanditiis,
            facilis ea vel animi exercitationem itaque.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmoothScroll from '~/mixins/SmoothScroll.js'

export default {
  mixins: [SmoothScroll]
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

.card-title {
  position: absolute;
  @apply text-5xl font-extrabold leading-none mt-4;
  transform: translateX(-10vw);
  text-shadow: 0px 4px 10px rgba(238, 238, 238, 0.25);
}

.card-title-rev {
  position: absolute;
  @apply text-5xl font-extrabold leading-none mt-4;
  transform: translateX(200px);
  z-index: 10;
  text-shadow: 0px 4px 10px rgba(238, 238, 238, 0.25);
}
.title-cn {
  z-index: 100;
}

.marge{
  margin-top: 4rem;
}
@media only screen and (max-width: 600px) {
  .card-title {
    position: absolute;
    @apply text-5xl font-extrabold leading-none mt-4;
    transform: translateX(0);
  }
  .card-title-rev {
    position: absolute;
    @apply text-5xl font-extrabold leading-none mt-4;
    transform: translateX(0);
    text-align: left;
    z-index: 10;
  }
.marge{
  margin-top: 0;
}
}
</style>
