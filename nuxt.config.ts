// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/rob.webapp/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {
    output: {
      publicDir: './docs',
    },
  },
  devtools: { enabled: true },
  css: ["@/assets/_main.scss"],
})
