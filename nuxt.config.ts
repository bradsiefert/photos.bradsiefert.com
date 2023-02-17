// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1"',
      title: 'Photographer Brad Siefert',
      meta: [
        { name: 'description', content: 'Chicago based photographer Brad Siefert specializing in portraits, landscapes, and instant film photography.' },
        { property: "og:image", content: 'https://photos.bradsiefert.com/sharing-tile.jpg' },
      ],
      script: [
       { src: '/jquery-1.11.1.min.js',
         body: true,
       },
       { src: '/bootstrap.min.js',
         body: true,
       },
       { src: '/jquery.flexslider.js',
         body: true,
       },
       { src: '/loading.js',
         body: true,
       }
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
  ]
})