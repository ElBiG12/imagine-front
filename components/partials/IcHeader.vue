<template>
  <nav class="absolute-header">
    <div class="main-header ic-container" :class="{ 'text-white': white }">
      <nuxt-link
        tag="img"
        to="/"
        :src="!white ? '/Logo-Imagine-Orange.png' : '/logo-imagine-white.png'"
        alt="Imagine Cinema Logo"
        class="imagine-cinema-logo cursor-pointer"
      />
      <div v-if="closeMode">
        <button @click="$router.back()" class="btn btn-alt">Fermer</button>
      </div>
      <div v-else class="menu space-x-6 md:space-x-12">
        <nuxt-link
          tag="ion-icon"
          to="/search"
          name="search-outline"
          class="menu-icon"
        />
        <ion-icon name="menu-outline" class="menu-icon" />
      </div>
    </div>
    <!-- <MobileMenu :links="links" /> -->
  </nav>
</template>

<script>
// import { MobileMenu } from '@/components/partials/MobileMenu'
export default {
  props: {
    closeMode: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    }
  },

  components: {
    // MobileMenu
  },

  data() {
    return {
      links: [
        {
          title: 'Imagine',
          path: '/imagine'
        },
        {
          title: 'Ateliers',
          path: '/'
        },
        {
          title: 'Collection thématique',
          path: '/collection-thematique'
        },
        {
          title: 'MasterClass',
          path: '/'
        },
        {
          title: 'Les Films',
          path: '/films'
        },
        {
          title: 'Actualités',
          path: '/actualites'
        },
        {
          title: "Éducation à l'image",
          path: '/education-a-l-image'
        },
        {
          title: 'Notre Histoire',
          path: '/notre-histoire'
        },
        {
          title: 'Contact',
          path: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.main-header {
  @apply flex justify-between mt-12 mb-24;
  height: 60px !important;
}

.absolute-header {
  @apply absolute w-full flex justify-center z-50;
  height: 200px;
}

.imagine-cinema-logo {
  @apply max-h-full;
}

.menu {
  @apply flex h-full items-center justify-end;
}
.menu > .menu-icon {
  font-size: 28px;
}
</style>
