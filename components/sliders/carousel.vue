<template>
  <div class="home-carousel">
    <div class="carousel-items">
      <div class="items">
        <img src="/carousel/car-1.jpg" alt="" srcset="" />
        <div class="text">
          <h2 class="c-headline">Nous créons des expériences percutantes.</h2>
        </div>
      </div>
    </div>
    <div class="c-nav-btns">
      <div class="c-prev-btn c-btn">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      <span class="separator" />
      <div class="c-next-btn c-btn">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="postcss" scoped>
.home-carousel {
  @apply w-full relative;
  height: 60vh;
}

.carousel-items {
  @apply relative w-full h-full bg-secondary;
}

.c-nav-btns {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  @apply flex flex-row flex-no-wrap justify-start align-bottom;
}
.c-nav-btns .separator {
  height: 50px;
  width: 1px;
  background-color: #DBDDE0;
}
.c-nav-btns .c-btn {
  @apply flex justify-center items-center bg-white text-danger cursor-pointer;
  height: 50px;
  width: 50px;
}

.items {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  padding: 2rem 2rem 7rem 2rem;

  @apply flex flex-col justify-end items-start bg-light overflow-hidden;
}

.items img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  @apply w-full min-h-full;
  object-fit: cover;
  /* transform-origin: center center; */
}

.text {
  z-index: 1;
}

.c-headline {
  @apply text-3xl font-bold leading-none text-white;
}

@screen sm {
  .c-headline {
    @apply text-5xl;
  }
}

@screen md {
  .c-headline {
    @apply text-7xl;
  }
}

@screen lg {
  .home-carousel {
    height: 70vh;
    /* height: calc((100vw/ 1.825) - 12vh); */
  }

  .c-nav-btns {
    bottom: 4.5rem;
    left: 4.5rem;
  }

  .items {
    padding: 4.5rem 4.5rem 10.5rem 4.5rem;
  }

  .c-headline {
    @apply text-10xl;
  }
}
@screen xl {
  .home-carousel {
    height: 80vh;
    /* height: calc((100vw/ 1.825) - 12vh); */
  }
}
</style>
