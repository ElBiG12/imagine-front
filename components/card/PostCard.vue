<template>
  <div class="full-w-post-card">
    <div class="img-cover">
      <img src="/img/post-card-img.jpg" alt="title" />
    </div>
    <h2 class="title">Cinéma</h2>
    <div class="short_desc">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        inventore vitae hic earum provident. Quae adipisci repellat assumenda
        minus debitis, iusto veritatis! Suscipit blanditiis, facilis ea vel
        animi exercitationem itaque.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.full-w-post-card {
  @apply relative flex flex-row flex-no-wrap;
}

.img-cover {
  @apply w-3/5 pr-6;
}

.img-cover img {
  @apply min-w-full min-h-full h-auto object-cover;
}

.title {
  @apply text-7xl font-extrabold leading-none;
  @apply absolute transform origin-center;
  top: 17%;
  left: calc(3 / 5 * 100%);
  --transform-translate-x: -50%;
  --transform-translate-y: -50%;
}

.short_desc {
  @apply w-2/5 text-lg absolute transform pl-6;
  top: 67%;
  left: calc(3 / 5 * 100%);
  --transform-translate-y: -50%;
}
</style>
