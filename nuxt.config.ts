// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
          lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Brad Siefert / Photography',
      meta: [
        { name: 'description', content: "I'm a Chicago-based photographer and UI/UX Designer experienced in portraits, landscapes, travel, long-exposure, and instant film photography." },
        { property: "og:image", content: 'https://photos.bradsiefert.com/sharing-tile.jpg' },
      ],
      script: [
       { src: 'jquery-1.11.1.min.js', tagPosition: 'bodyClose' },
       { src: 'bootstrap.min.js', tagPosition: 'bodyClose' },
       { src: 'jquery.flexslider.js', tagPosition: 'bodyClose' }
      ]
    }
  },

  router: {
    options: {
      linkExactActiveClass: 'active',
    }
  },

  css: [
    '@/css/fontfaces.css',
    '@/css/bootstrap.css',
    '@/css/customize.css',
    '@/css/flexslider.css'
  ],

  compatibilityDate: '2024-12-24'
})