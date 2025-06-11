# Nuxt 3 Installation
## nuxtjs init project
```bash
npx nuxi@latest init nuxt.prime
```

## primevue
```bash
pnpm add -D @primevue/nuxt-module
pnpm add -D @primevue/forms
pnpm add -D @primevue/themes
pnpm add -D primevue primeicons primeflex
pnpm add -D big.js @types/big.js chart.js
```
## nuxt-auth-utils
```bash
npx nuxi@latest module add auth-utils
```
## nuxt/content
```bash
npx nuxi@latest module add content
```

## [package.json]
```json
{
  ...
  "dependencies": {
    "@nuxt/content": "^2.13.4",
    "nuxt": "^3.17.5",
    "nuxt-auth-utils": "^0.5.20",
    "vue": "latest",
    "vue-router": "latest"
  },
  "devDependencies": {
    "@primevue/forms": "^4.3.5",
    "@primevue/nuxt-module": "^4.3.5",
    "@primevue/themes": "^4.3.5",
    "@types/big.js": "^6.2.2",
    "big.js": "^6.2.2",
    "chart.js": "^4.4.9",
    "primeflex": "^3.3.1",
    "primeicons": "^7.0.0",
    "primevue": "^4.3.5"
  },
  ...
}
```

## [nuxt.config.ts]
```javascript
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
        process.env.NUXT_SESSION_SECRET || "1234567_1234567_1234567_12345678",
    },
  }
})
```