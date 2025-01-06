// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      VITE_API_BASE_URL: process.env.VITE_API_BASE_URL
    }
  }
})


