module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      colors: {
        ui: {
          white: '#fff',
          outline: '#e2e2e2',
          bgContrast: '#F9F8FD',
          textTitles: '#283848',
          textBody: '#33475B',
        },
        ux: {
          blue: '#337AB7',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
