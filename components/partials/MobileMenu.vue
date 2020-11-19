<template>
  <div class="mobile-nav" data-scroll-sticky>
    <div class="ic-container">
      <div class="flex flex-col items-end">
        <button @click="$router.back()" class="btn btn-alt">Fermer</button>
      </div>
      <ul class="link-items">
        <NuxtLink
          tag="li"
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
        >
          {{ link.title }}
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.$nextTick(function () {
      // this.Gsap.set('.mobile-nav', {
      //   scrollTrigger: {
      //     trigger: '.ic-smooth-scroll',
      //     scrub: true,
      //     pin: true,
      //     start: 'top top',
      //     end: 'bottom bottom',
      //     markers: true
      //   },
      //   ease: 'none'
      // })
    })
  }
}
</script>

<style lang="postcss" scoped>
.mobile-nav {
  @apply fixed top-0 left-0 right-0 p-6 overflow-y-scroll h-screen;
  @apply flex flex-col gap-y-32 bg-extra-light;
}

@screen md {
  @apply fixed top-0 left-0 bottom-0 right-0 px-24;
}
</style>
