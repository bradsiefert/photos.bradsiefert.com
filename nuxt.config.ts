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

  // Enable SSR for static site generation
  ssr: true,

  // Performance optimizations
  nitro: {
    compressPublicAssets: true, // Compress static assets with gzip/brotli
  },

  experimental: {
    payloadExtraction: false, // Disable for better performance on mostly static sites
  },

  // Build optimizations
  vite: {
    build: {
      cssMinify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'jquery': ['jquery'],
          }
        }
      }
    }
  },

  compatibilityDate: '2025-10-09'
})