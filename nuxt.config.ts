// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {
    output: {
      publicDir: './docs',
    },
  },
  devtools: { enabled: false },
  css: ["@/assets/_main.scss"],
})
