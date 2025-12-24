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
        { name: 'description', content: "I'm a Chicago-based photographer and Product Designer experienced in portraits, landscapes, travel, long-exposure, and instant film photography." },
        { property: "og:image", content: 'https://photos.bradsiefert.com/sharing-tile.jpg' },
      ],
      script: [
       { src: '/jquery-1.11.1.min.js', tagPosition: 'bodyClose' },
       { src: '/bootstrap.min.js', tagPosition: 'bodyClose' },
       { src: '/jquery.flexslider.js', tagPosition: 'bodyClose' }
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
  modules: [
    '@nuxt/image'
  ],
  image: {
    quality: 81,
    format: ['avif', 'webp'],
    // Provider is set via NUXT_IMAGE_PROVIDER environment variable
    // Defaults to 'ipx' for local dev, 'netlify' for Netlify builds (set in netlify.toml)
    // @ts-ignore - process.env is available at build time
    provider: process.env.NUXT_IMAGE_PROVIDER || 'ipx'
  },
  // Enable SSR for static site generation
  ssr: true,
  compatibilityDate: '2025-10-09'
})