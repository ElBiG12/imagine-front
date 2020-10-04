/**
 * If we need to override the default configuration
 * We also can use module configuration in nuxt.config.js file
 */

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    important: true,
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      display: ['Roboto Condensed', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
