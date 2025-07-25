import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', 'nuxt-auth-utils', '@nuxt/content'],
  primevue: {
    components: {
      exclude: ['Editor'] // Fix Chart Error!
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'system'
        }
      }
    }
  },
  css: [
    '@/assets/styles.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  runtimeConfig: {
    session: {
      maxAge: 60 * 5, // 5 minutes
      password:
        process.env.NUXT_SESSION_PASSWORD || "1234567_1234567_1234567_12345678",
    },
  },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        port: parseInt(process.env.REDIS_PORT || '6376'), // Redis port
        host: process.env.REDIS_HOST,
        username: process.env.REDIS_USER || 'default',
        password: process.env.REDIS_PASSWORD, 
        db: 0, // Defaults to 0
      }
    }
  }
})