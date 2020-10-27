<template>
  <div
    class="full-w-post-card"
    :class="reversed ? 'reversed-card' : 'default-card'"
  >
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
export default {
  props: {
    reversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.full-w-post-card {
  @apply relative flex;
}

.default-card,
.reversed-card {
  @apply flex-col;
}

.img-cover {
  @apply w-full;
}

.img-cover img {
  @apply min-w-full h-auto object-cover;
}

.title {
  @apply text-5xl font-extrabold leading-none mt-4;
  text-shadow: 0px 0px 2px #ffffff;
}

.short_desc {
  @apply w-full text-base mt-4;
}

@screen sm {
  .full-w-post-card {
    @apply flex w-full;
  }

  .default-card, .reversed-card {
    @apply flex-col;
  }

  .reversed-card {
    @apply items-end;
  }

  .img-cover {
    @apply w-4/5;
  }

  .title {
    @apply text-6xl font-extrabold leading-none;
    @apply absolute transform origin-center;
    top: 34%;
    text-shadow: 0px 0px 2px #ffffff;
    --transform-translate-y: -50%;
  }

  .default-card .title {
    left: calc(4 / 5 * 100%);
    --transform-translate-x: -50%;
  }

  .reversed-card .title {
    right: calc(4 / 5 * 100%);
    --transform-translate-x: 50%;
  }

  .short_desc {
    @apply w-4/5 text-lg;
  }
}

@screen lg {
  .full-w-post-card {
    @apply relative flex flex-row flex-no-wrap;
  }

  .default-card {
    @apply flex-row;
  }

  .reversed-card {
    @apply flex-row-reverse;
  }

  .img-cover {
    @apply w-3/5;
  }

  .default-card .img-cover {
    @apply pr-6;
  }

  .reversed-card .img-cover {
    @apply pl-6;
  }

  .title {
    @apply text-7xl font-extrabold leading-none;
    @apply absolute transform origin-center;
    top: 17%;
    text-shadow: 0px 0px 2px #ffffff;
    --transform-translate-y: -50%;
  }

  .default-card .title {
    left: calc(3 / 5 * 100%);
    --transform-translate-x: -50%;
  }

  .reversed-card .title {
    right: calc(3 / 5 * 100%);
    --transform-translate-x: 50%;
  }

  .short_desc {
    @apply w-2/5 text-lg absolute transform;
    top: 67%;
    --transform-translate-y: -50%;
  }

  .default-card .short_desc {
    @apply pl-6;
    left: calc(3 / 5 * 100%);
  }

  .reversed-card .short_desc {
    @apply pr-6;
    right: calc(3 / 5 * 100%);
  }
}
</style>
