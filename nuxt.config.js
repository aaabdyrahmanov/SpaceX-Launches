import colors from 'vuetify/es5/util/colors'

// import environment variables
require('dotenv').config()
const isDebugMode = process.env.NODE_ENV !== 'production'
const API_ADDRESS = process.env.SERVER_ADDRESS

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'SpaceX Launches',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '🚀' }]
  // link: [{ rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  manifest: {
    name: 'SpaceX Launches',
    short_name: 'SpaceX Launches',
    description: 'Recent and upcoming launches of the SpaceX',
    theme_color: '#409EFF'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-readmore'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: API_ADDRESS,
    debug: isDebugMode,
    progress: true,
    retry: {
      retries: 3
    },
    proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }
}
