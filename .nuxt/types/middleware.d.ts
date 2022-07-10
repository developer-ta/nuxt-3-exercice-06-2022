import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}