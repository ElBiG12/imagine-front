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
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2.25rem',
      '5xl': '2.375rem',
      '6xl': '3rem',
      '7xl': '3.625rem',
      '8-1xl': '4rem',
      '8xl': '4.25rem',
      '9xl': '4.5rem',
      '10xl': '4.875rem',
      '11xl': '6rem',
      '12xl': '8.125rem',
    },
    extend: {
      gridTemplateRows: {
        'main-layout': '200px 1fr auto',
      },
      colors: {
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-dark)',
        'dark-grey': 'var(--color-dark-grey)',
        light: 'var(--color-light)',
        'extra-light': 'var(--color-extra-light)',
        danger: 'var(--color-danger)',
        'light-grey': 'var(--color-light-grey)',
        'alt-light-grey': 'var(--color-alt-light-grey)',
      },
    },
  },
  variants: {},
  plugins: [],
}
