import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}