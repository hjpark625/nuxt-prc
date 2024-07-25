// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: { typeCheck: true, strict: true, builder: 'vite' },
  modules: ['@nuxt/eslint'],
  app: {
    head: {
      charset: 'utf-8',
      title: 'My Nuxt.js Application',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  css: ['@/assets/scss/root.scss']
})
