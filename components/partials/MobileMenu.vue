<template>
  <div id="mobile_nav" class="mobile-nav">
    <div class="ic-container">
      <div id="mobile_nav_close_btn" class="flex flex-col items-end">
        <button class="btn btn-alt" @click="closeMobileNav()">Fermer</button>
      </div>
      <ul class="link-items">
        <li
          v-for="(link, index) in linkList"
          :key="index"
          @click="goTo(link.path)"
          class="mobile-link"
        >
          {{ link.title }}
        </li>
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

  data() {
    return {
      enterTween: null
    }
  },

  computed: {
    linkList() {
      const linkArray = [
        {
          title: 'Accueil',
          path: '/',
          cat: false
        }
      ]

      this.links.forEach((element) => {
        if (element.cat) {
          Array.prototype.push.apply(linkArray, element.child)
        } else {
          linkArray.push(element)
        }
      })
      return linkArray
    }
  },

  mounted() {
    this.$nextTick(function () {})
  },

  methods: {
    closeMobileNav() {
      const vm = this
      vm.$LmsState.isMobileNavOpen = false
      vm.Gsap.to('#mobile_nav', {
        x: '100%',
        ease: 'expo.out'
      })
    },
    goTo(path) {
      const vm = this
      this.Gsap.to('#mobile_nav', {
        x: '100%',
        ease: 'expo.out',
        onComplete: () => {
          vm.$LmsState.isMobileNavOpen = false
          vm.$router.push({ path: `${path}` })
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.mobile-nav {
  @apply fixed top-0 left-0 right-0 w-full p-6 overflow-hidden min-h-screen;
  @apply flex flex-col gap-y-32 bg-dark text-white;
  opacity: 1;
  transform: translate(100%, 0);
}

.link-items {
  @apply my-16;
}

.mobile-link {
  @apply text-3xl font-display font-bold my-2 cursor-pointer transition;
}

.mobile-link:hover {
  @apply text-secondary;
}

@screen md {
  @apply absolute top-0 right-0 px-24;

  .mobile-link {
    @apply text-5xl;
  }
}
</style>
