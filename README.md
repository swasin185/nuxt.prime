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
  "name": "nuxt.prime",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "@nuxt/content": "^2.13.4",
    "nuxt": "^3.17.6",
    "nuxt-auth-utils": "^0.5.20",
    "redis": "^5.6.0",
    "vue": "latest",
    "vue-router": "latest"
  },
  "devDependencies": {
    "@primevue/forms": "^4.3.6",
    "@primevue/nuxt-module": "^4.3.6",
    "@primevue/themes": "^4.3.6",
    "@types/big.js": "^6.2.2",
    "big.js": "^6.2.2",
    "chart.js": "^4.5.0",
    "primeflex": "^3.3.1",
    "primeicons": "^7.0.0",
    "primevue": "^4.3.6"
  },
  "packageManager": "pnpm@10.13.1+sha512.37ebf1a5c7a30d5fabe0c5df44ee8da4c965ca0c5af3dbab28c3a1681b70a256218d05c81c9c0dcf767ef6b8551eb5b960042b9ed4300c59242336377e01cfad"
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