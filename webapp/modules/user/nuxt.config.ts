export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL || 'http://localhost:3000/api/users',
      baseImageUrl: process.env.BASE_IMAGE_URL || 'http://localhost:3000',
    },
  },
})
