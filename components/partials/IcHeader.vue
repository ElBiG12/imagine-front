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
      <div class="grid grid-flow-col mt-4">
        <div class="dropdown">
          <button class="dropbtn">Imagine</button>
          <div class="dropdown-content">
            <a href="#">A Propos</a>
            <a href="#">Notre Histoire</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Education a l'image</button>
          <div class="dropdown-content">
            <a href="#">Education a l'image</a>
            <a href="#">Atelier</a>
            <a href="#">Collection Thematique</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">MasterClass</button>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Les Films</button>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Actualité</button>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Contact</button>
        </div>
      </div>
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
.dropbtn {
  color: black;
  padding: 6px 16px 6px 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  margin-top: 10px;
  position: absolute;
  overflow: hidden;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  z-index: 1;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
  color: #f39913;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: White;
  color: #f39913;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
}
</style>
