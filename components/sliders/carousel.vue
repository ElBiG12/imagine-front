<template>
  <div class="home-carousel">
    <div class="carousel-item">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
        facilis rerum inventore cupiditate incidunt magni recusandae quaerat
        quam sapiente quos suscipit nesciunt, eligendi id repellendus ab
        exercitationem! Error, tempore repudiandae.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="postcss">
.home-carousel {
  @apply w-full h-64 bg-secondary;
}
</style>
