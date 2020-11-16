<template>
  <div class="home-carousel">
    <div class="carousel-items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="items"
        :class="{ active: index == 0 }"
        :ref="`slide_${index}`"
      >
        <img :src="item.cover" alt="" srcset="" />
        <div class="text">
          <h2 class="c-headline" v-text="item.title"></h2>
        </div>
      </div>
    </div>
    <div class="c-nav-btns">
      <div class="c-prev-btn c-btn" @click="prevSlide">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      <span class="separator" />
      <div class="c-next-btn c-btn" @click="nextSlide">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['items'],

  data() {
    return {
      items: [
        {
          title: 'Nous créons des expériences percutantes.',
          cover: '/carousel/car-1.jpg'
        },
        {
          title: "Nous Batissons l'avenir.",
          cover: '/carousel/car-2.jpg'
        }
      ],
      currentIndex: 0,
      sliding: false
    }
  },

  computed: {
    nextIndex() {
      return this.currentIndex + 1 === this.items.length
        ? 0
        : this.currentIndex + 1
    },
    prevIndex() {
      return this.currentIndex === 0
        ? this.items.length - 1
        : this.currentIndex - 1
    }
  },

  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs[`slide_${1}`][0])
    })
  },

  methods: {
    nextSlide() {
      if (this.sliding) {
        return
      }

      const vm = this

      const currentTarget = vm.$refs[`slide_${vm.currentIndex}`][0]
      const nextTarget = vm.$refs[`slide_${vm.nextIndex}`][0]

      vm.sliding = true
      nextTarget.classList.add('active')

      vm.Gsap.set(currentTarget, {
        zIndex: 9
      })

      vm.Gsap.to(currentTarget, {
        x: '100%',
        zIndex: 9,
        delay: 0.2,
        onComplete() {
          vm.sliding = false
          currentTarget.classList.remove('active')
          vm.currentIndex = vm.nextIndex
        }
      })

      vm.Gsap.set(nextTarget, {
        zIndex: 10,
        x: '-100%'
      })
      vm.Gsap.to(nextTarget, {
        x: 0
      })
    },
    prevSlide() {
      if (this.sliding) {
        return
      }

      const vm = this

      const currentTarget = vm.$refs[`slide_${vm.currentIndex}`][0]
      const prevTarget = vm.$refs[`slide_${vm.prevIndex}`][0]

      vm.sliding = true

      vm.Gsap.set(currentTarget, { zIndex: 9 })
      prevTarget.classList.add('active')

      vm.Gsap.to(currentTarget, {
        x: '-100%',
        zIndex: 9,
        delay: 0.2,
        onComplete() {
          vm.sliding = false
          currentTarget.classList.remove('active')
          vm.currentIndex = vm.prevIndex
        }
      })

      vm.Gsap.set(prevTarget, {
        zIndex: 10,
        x: '100%'
      })
      vm.Gsap.to(prevTarget, {
        x: 0
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.home-carousel {
  @apply w-full relative overflow-hidden;
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
  z-index: 11;
}
.c-nav-btns .c-btn {
  @apply flex justify-center items-center bg-white text-danger cursor-pointer;
  height: 50px;
  width: 50px;
  z-index: 11;
}

.items {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  padding: 2rem 2rem 7rem 2rem;

  @apply hidden flex-col justify-end items-start bg-light overflow-hidden;
}

.active {
  @apply flex;
  z-index: 10;
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
  position: relative;
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
