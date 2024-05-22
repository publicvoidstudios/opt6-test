// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      script: [{
        src: 'https://www.youtube.com/iframe_api'
      }],
      title: 'Тестовое задание для OPT6 Владислав Пак',
      htmlAttrs: {
        lang: 'ru'
      }
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  modules: ['@pinia/nuxt'],

  css: [
      '~/assets/scss/variables.scss',
      '~/assets/css/styles.css',
  ],
})