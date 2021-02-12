export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `Patricia Aguilar | ${titleChunk}`
        : 'Patricia Aguilar | Consultoria Inmobiliaria'
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/base.scss',
    '~/assets/styles/utilities.scss',
    '~/assets/styles/components.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/font-awesome.js', ssr: true },
    { src: '~/plugins/vue-scroll.js', ssr: false}
    ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', { 
      families: {
         'Source+Sans+Pro': [200, 400, 600]
      },
      download: true
      }]
  ],
  watch: ['~/tailwind.config.js'],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [    
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-carousel'],
  },
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active--exact',
  },
}
