export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'imagine-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons.js", body: true, ssr: false }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    'nuxt-webfontloader'
  ],

  webfontloader: {
    custom: {
      families: [
        'Roboto:n1,n3,n4,n5,n7,n9',
        'Roboto Condensed:n3,n4,n7',
      ],
      urls: [
        'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap'
      ]
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    purgeCSS: { mode: 'postcss' }
  },

  vue: {
    config: {
      ignoredElements: ['ion-icon']
    }
  }
}
