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
    colors: {
      secondary: 'var(--color-secondary)',
      dark: 'var(--color-dark)',
      light: 'var(--color-light)',
      'light-grey': 'var(--color-light-grey)',
    },
    extend: {
      gridTemplateRows: {
         'main-layout': '200px 1fr auto',
      }
    },
  },
  variants: {},
  plugins: [],
}
