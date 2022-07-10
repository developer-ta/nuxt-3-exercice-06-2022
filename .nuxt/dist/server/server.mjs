
// --------------------
// Request: /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/paths.mjs ($id_1a98c859)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/css.mjs ($id_ef231631)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/root-component.mjs ($id_36ef6c06)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/app-component.mjs ($id_a5fe1438)
// --------------------
const $id_e6d3fd88 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/components.plugin.mjs ($id_f2b42984)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /components/Nav.vue ($id_9848a0a6)
// - /pages/demo-1.vue?macro=true ($id_1ea4b9ef)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/layouts.mjs ($id_d735555b)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// - /components/restaurant/Row.vue ($id_f6cab29f)
// - /pages/demo3.vue?macro=true ($id_bd952890)
// - /components/LazyText.vue ($id_cffff25c)
// - /pages/demo4.vue?macro=true ($id_7d9abb22)
// - /pages/good-[name]/demo2-[id].vue?macro=true ($id_386888dc)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/parent.vue?macro=true ($id_0be85b41)
// - /pages/parent/child-2.vue?macro=true ($id_3b3dc3b0)
// - /pages/parent/child.vue?macro=true ($id_ea97a7ed)
// - /pages/parent/demo5.vue?macro=true ($id_096ce7b5)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /pages/parent/validator.vue?macro=true ($id_9d3da6f7)
// - /pages/quickstart.vue?macro=true ($id_bcd290a0)
// - /components/restaurant/Table.vue ($id_85a5084f)
// - /pages/restaurants.vue?macro=true ($id_a9d5d7ec)
// - /pages/demo-1.vue ($id_f64e1822)
// - /pages/demo3.vue ($id_dc4be931)
// - /pages/demo4.vue ($id_c5e3c87a)
// - /pages/good-[name]/demo2-[id].vue ($id_def97ba0)
// - /pages/index.vue ($id_cca58e97)
// - /pages/parent/child-2.vue ($id_832bd101)
// - /pages/parent/child.vue ($id_3d38c63f)
// - /pages/parent/demo5.vue ($id_7aae50e9)
// - /pages/parent/validator.vue ($id_cd7804c4)
// - /pages/parent.vue ($id_0baa0e63)
// - /pages/quickstart.vue ($id_bd2d66fd)
// - /pages/restaurants.vue ($id_a4446a90)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/paths.mjs
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_1a98c859 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/paths.mjs ($id_1a98c859)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /pages/good-[name]/demo2-[id].vue?macro=true ($id_386888dc)
// - /pages/good-[name]/demo2-[id].vue ($id_def97ba0)
// - /plugins/veevalidate-componets.ts ($id_79b1b8ec)
// - /plugins/veevalidate-rules.ts ($id_5c45c07f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_1__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_1__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = router.resolve(to).fullPath || "/";
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /components/Nav.vue ($id_9848a0a6)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/css.mjs
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// --------------------
const $id_ef231631 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/css.mjs ($id_ef231631)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! tailwindcss v3.1.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:Inter,sans-serif;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.prose{color:var(--tw-prose-body);max-width:65ch}.prose :where([class~=lead]):not(:where([class~=not-prose] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-bottom:1.2em;margin-top:1.2em}.prose :where(a):not(:where([class~=not-prose] *)){color:var(--tw-prose-links);font-weight:500;text-decoration:underline}.prose :where(strong):not(:where([class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(ol):not(:where([class~=not-prose] *)){list-style-type:decimal;padding-left:1.625em}.prose :where(ol[type=A]):not(:where([class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=\"1\"]):not(:where([class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose] *)){list-style-type:disc;padding-left:1.625em}.prose :where(ol>li):not(:where([class~=not-prose] *))::marker{color:var(--tw-prose-counters);font-weight:400}.prose :where(ul>li):not(:where([class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(hr):not(:where([class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-bottom:3em;margin-top:3em}.prose :where(blockquote):not(:where([class~=not-prose] *)){border-left-color:var(--tw-prose-quote-borders);border-left-width:.25rem;color:var(--tw-prose-quotes);font-style:italic;font-weight:500;margin-bottom:1.6em;margin-top:1.6em;padding-left:1em;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:2.25em;font-weight:800;line-height:1.1111111;margin-bottom:.8888889em;margin-top:0}.prose :where(h1 strong):not(:where([class~=not-prose] *)){font-weight:900}.prose :where(h2):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:1.5em;font-weight:700;line-height:1.3333333;margin-bottom:1em;margin-top:2em}.prose :where(h2 strong):not(:where([class~=not-prose] *)){font-weight:800}.prose :where(h3):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-size:1.25em;font-weight:600;line-height:1.6;margin-bottom:.6em;margin-top:1.6em}.prose :where(h3 strong):not(:where([class~=not-prose] *)){font-weight:700}.prose :where(h4):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;line-height:1.5;margin-bottom:.5em;margin-top:1.5em}.prose :where(h4 strong):not(:where([class~=not-prose] *)){font-weight:700}.prose :where(figure>*):not(:where([class~=not-prose] *)){margin-bottom:0;margin-top:0}.prose :where(figcaption):not(:where([class~=not-prose] *)){color:var(--tw-prose-captions);font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose :where(code):not(:where([class~=not-prose] *)){color:var(--tw-prose-code);font-size:.875em;font-weight:600}.prose :where(code):not(:where([class~=not-prose] *)):before{content:\"`\"}.prose :where(code):not(:where([class~=not-prose] *)):after{content:\"`\"}.prose :where(a code):not(:where([class~=not-prose] *)){color:var(--tw-prose-links)}.prose :where(pre):not(:where([class~=not-prose] *)){background-color:var(--tw-prose-pre-bg);border-radius:.375rem;color:var(--tw-prose-pre-code);font-size:.875em;font-weight:400;line-height:1.7142857;margin-bottom:1.7142857em;margin-top:1.7142857em;overflow-x:auto;padding:.8571429em 1.1428571em}.prose :where(pre code):not(:where([class~=not-prose] *)){background-color:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;padding:0}.prose :where(pre code):not(:where([class~=not-prose] *)):before{content:none}.prose :where(pre code):not(:where([class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose] *)){font-size:.875em;line-height:1.7142857;margin-bottom:2em;margin-top:2em;table-layout:auto;text-align:left;width:100%}.prose :where(thead):not(:where([class~=not-prose] *)){border-bottom-color:var(--tw-prose-th-borders);border-bottom-width:1px}.prose :where(thead th):not(:where([class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;padding-bottom:.5714286em;padding-left:.5714286em;padding-right:.5714286em;vertical-align:bottom}.prose :where(tbody tr):not(:where([class~=not-prose] *)){border-bottom-color:var(--tw-prose-td-borders);border-bottom-width:1px}.prose :where(tbody tr:last-child):not(:where([class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose] *)){padding:.5714286em;vertical-align:baseline}.prose{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgba(0,0,0,.5);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75}.prose :where(p):not(:where([class~=not-prose] *)){margin-bottom:1.25em;margin-top:1.25em}.prose :where(img):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.prose :where(video):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.prose :where(figure):not(:where([class~=not-prose] *)){margin-bottom:2em;margin-top:2em}.prose :where(h2 code):not(:where([class~=not-prose] *)){font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose] *)){font-size:.9em}.prose :where(li):not(:where([class~=not-prose] *)){margin-bottom:.5em;margin-top:.5em}.prose :where(ol>li):not(:where([class~=not-prose] *)){padding-left:.375em}.prose :where(ul>li):not(:where([class~=not-prose] *)){padding-left:.375em}.prose>:where(ul>li p):not(:where([class~=not-prose] *)){margin-bottom:.75em;margin-top:.75em}.prose>:where(ul>li>:first-child):not(:where([class~=not-prose] *)){margin-top:1.25em}.prose>:where(ul>li>:last-child):not(:where([class~=not-prose] *)){margin-bottom:1.25em}.prose>:where(ol>li>:first-child):not(:where([class~=not-prose] *)){margin-top:1.25em}.prose>:where(ol>li>:last-child):not(:where([class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose] *)){margin-bottom:.75em;margin-top:.75em}.prose :where(hr+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(h2+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(h3+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(h4+*):not(:where([class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose] *)){padding-left:0}.prose :where(thead th:last-child):not(:where([class~=not-prose] *)){padding-right:0}.prose :where(tbody td:first-child):not(:where([class~=not-prose] *)){padding-left:0}.prose :where(tbody td:last-child):not(:where([class~=not-prose] *)){padding-right:0}.prose>:where(:first-child):not(:where([class~=not-prose] *)){margin-top:0}.prose>:where(:last-child):not(:where([class~=not-prose] *)){margin-bottom:0}.btn-primary{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:rgb(238 242 255/var(--tw-bg-opacity));border-radius:.5rem;border-style:none;box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);font-size:1rem;font-weight:200;line-height:1.5rem;margin:.25rem;outline-color:#ef4444;outline-style:solid;outline-width:.15px;padding:.5rem 1rem;width:12rem}.btn-primary:hover{--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity))}.btn-primary:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:rgb(248 113 113/var(--tw-ring-opacity));--tw-ring-opacity:0.75;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);outline:2px solid transparent;outline-offset:2px}.transition-hover{--tw-translate-y:100%;--tw-scale-x:0;--tw-scale-y:0;--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity));height:1px;margin-top:.25rem;transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.group:hover .transition-hover,.transition-hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.group:hover .transition-hover{--tw-translate-y:-100%;--tw-scale-x:1;--tw-scale-y:1}.title-primary{--tw-gradient-from:#9333ea;--tw-gradient-to:rgba(147,51,234,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#6366f1;-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(to right,var(--tw-gradient-stops));color:transparent}.nav-link{--tw-scale-x:1;--tw-scale-y:1;--tw-text-opacity:1;color:rgb(124 58 237/var(--tw-text-opacity));transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.nav-link,.nav-link:hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.nav-link:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;color:rgb(220 38 38/var(--tw-text-opacity))}.container,.nav-link:hover{--tw-text-opacity:1}.container{color:rgb(29 78 216/var(--tw-text-opacity));font-family:Arial,Helvetica,sans-serif;margin:auto;max-width:56rem;text-align:center}.container h1{font-size:3rem;line-height:1}option-container{--tw-gradient-from:#fecdd3;--tw-gradient-to:rgba(254,205,211,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#c4b5fd;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);--tw-shadow-color:#1e3a8a;--tw-shadow:var(--tw-shadow-colored);background-image:linear-gradient(to top right,var(--tw-gradient-stops));border-radius:1.5rem;box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);margin-bottom:2rem;margin-top:4rem;padding:1rem;position:relative;width:95%}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-bottom:0;margin-top:0}.mt-24{margin-top:6rem}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.h-8{height:2rem}.h-5{height:1.25rem}.min-h-screen{min-height:100vh}.w-4{width:1rem}.w-screen{width:100vw}.w-96{width:24rem}.w-\\[99\\%\\]{width:99%}.border-collapse{border-collapse:collapse}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-x-7>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1.75rem*var(--tw-space-x-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.rounded-2xl{border-radius:1rem}.border{border-width:1px}.border-0{border-width:0}.border-b-2{border-bottom-width:2px}.border-solid{border-style:solid}.border-slate-300{--tw-border-opacity:1;border-color:rgb(203 213 225/var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.border-violet-300{--tw-border-opacity:1;border-color:rgb(196 181 253/var(--tw-border-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.bg-gradient-to-tr{background-image:linear-gradient(to top right,var(--tw-gradient-stops))}.from-violet-100{--tw-gradient-from:#ede9fe;--tw-gradient-to:rgba(237,233,254,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-purple-50{--tw-gradient-to:#faf5ff}.p-6{padding:1.5rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.px-\\[5\\%\\]{padding-left:5%;padding-right:5%}.py-\\[5\\%\\]{padding-bottom:5%;padding-top:5%}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pl-5{padding-left:1.25rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.text-primary{--tw-text-opacity:1;color:rgb(124 58 237/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-stone-50{--tw-text-opacity:1;color:rgb(250 250 249/var(--tw-text-opacity))}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline-0{outline-width:0}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.router-link-active div{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity))}.rainbow-text{-webkit-background-clip:text;background-clip:text;color:transparent}.rainbow-bg,.rainbow-text{--tw-gradient-from:#7c3aed;--tw-gradient-to:rgba(124,58,237,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#db2777;background-image:linear-gradient(to right,var(--tw-gradient-stops))}.page-enter-active,.page-leave-active{transition:all .3s ease-in-out}.page-enter-from,.page-leave-to{opacity:0;transform:scale(.99)}@media (min-width:1024px){.lg\\:px-\\[15\\%\\]{padding-left:15%;padding-right:15%}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/components.plugin.mjs ($id_f2b42984)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /plugins/veevalidate-componets.ts ($id_79b1b8ec)
// - /plugins/veevalidate-rules.ts ($id_5c45c07f)
// --------------------
const $id_4b0d3c69 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/plugins/veevalidate-componets.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/plugins/veevalidate-rules.ts");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_f2b42984 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/meta.config.mjs ($id_ce41cec4)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw(__vite_ssr_import_4__.default.globalMeta));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_ce41cec4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/router.options.mjs ($id_f7933344)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/middleware.mjs ($id_04974f24)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  router.afterEach(async (to) => {
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    }
  });
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_8__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/demo-1.vue?macro=true ($id_1ea4b9ef)
// - /pages/demo3.vue?macro=true ($id_bd952890)
// - /pages/demo4.vue?macro=true ($id_7d9abb22)
// - /pages/good-[name]/demo2-[id].vue?macro=true ($id_386888dc)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/parent.vue?macro=true ($id_0be85b41)
// - /pages/parent/child-2.vue?macro=true ($id_3b3dc3b0)
// - /pages/parent/child.vue?macro=true ($id_ea97a7ed)
// - /pages/parent/demo5.vue?macro=true ($id_096ce7b5)
// - /pages/parent/validator.vue?macro=true ($id_9d3da6f7)
// - /pages/quickstart.vue?macro=true ($id_bcd290a0)
// - /pages/restaurants.vue?macro=true ($id_a9d5d7ec)
// - /pages/demo-1.vue ($id_f64e1822)
// - /pages/demo3.vue ($id_dc4be931)
// - /pages/demo4.vue ($id_c5e3c87a)
// - /pages/good-[name]/demo2-[id].vue ($id_def97ba0)
// - /pages/index.vue ($id_cca58e97)
// - /pages/parent/child-2.vue ($id_832bd101)
// - /pages/parent/child.vue ($id_3d38c63f)
// - /pages/parent/demo5.vue ($id_7aae50e9)
// - /pages/parent/validator.vue ($id_cd7804c4)
// - /pages/parent.vue ($id_0baa0e63)
// - /pages/quickstart.vue ($id_bd2d66fd)
// - /pages/restaurants.vue ($id_a4446a90)
// --------------------
const $id_cf1b21eb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/demo-1.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/demo3.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/demo4.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/good-[name]/demo2-[id].vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/parent.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/parent/child-2.vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/parent/child.vue?macro=true");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/parent/demo5.vue?macro=true");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/parent/validator.vue?macro=true");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/pages/quickstart.vue?macro=true");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/pages/restaurants.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "demo-1",
    path: "/demo-1",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo-1.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/demo-1.vue')
  },
  {
    name: "demo3",
    path: "/demo3",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo3.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/demo3.vue')
  },
  {
    name: "demo4",
    path: "/demo4",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo4.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/demo4.vue')
  },
  {
    name: "good-name-demo2-id",
    path: "/good-:name/demo2-:id",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/good-[name]/demo2-[id].vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/good-[name]/demo2-[id].vue')
  },
  {
    name: "index",
    path: "/",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "parent",
    path: "/parent",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent.vue",
    children: [
  {
    name: "parent-child-2",
    path: "child-2",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/child-2.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/parent/child-2.vue')
  },
  {
    name: "parent-child",
    path: "child",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/child.vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/parent/child.vue')
  },
  {
    name: "parent-demo5",
    path: "demo5",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/demo5.vue",
    children: [],
    meta: __vite_ssr_import_8__.meta,
    alias: __vite_ssr_import_8__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/parent/demo5.vue')
  },
  {
    name: "parent-validator",
    path: "validator",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/validator.vue",
    children: [],
    meta: __vite_ssr_import_9__.meta,
    alias: __vite_ssr_import_9__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/parent/validator.vue')
  }
],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/parent.vue')
  },
  {
    name: "quickstart",
    path: "/quickstart",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/quickstart.vue",
    children: [],
    meta: __vite_ssr_import_10__.meta,
    alias: __vite_ssr_import_10__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/quickstart.vue')
  },
  {
    name: "restaurants",
    path: "/restaurants",
    file: "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/restaurants.vue",
    children: [],
    meta: __vite_ssr_import_11__.meta,
    alias: __vite_ssr_import_11__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/restaurants.vue')
  }
];
}


// --------------------
// Request: /pages/demo-1.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/Nav.vue ($id_9848a0a6)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1ea4b9ef = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<!--[-->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<div class="prose y-[5%] flex items-center justify-between text-center flex-col"><h1 class="title-primary">demo-1.vue | path=&#39;demo-1&#39;</h1></div><!--]-->`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/demo-1.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo-1.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Nav.vue
// Parents: 
// - /pages/demo-1.vue?macro=true ($id_1ea4b9ef)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/restaurants.vue?macro=true ($id_a9d5d7ec)
// - /pages/demo-1.vue ($id_f64e1822)
// - /pages/index.vue ($id_cca58e97)
// - /pages/restaurants.vue ($id_a4446a90)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/@iconify/vue/dist/iconify.mjs ($id_006f91fb)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9848a0a6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@iconify/vue/dist/iconify.mjs");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const links = [
  { name: 'Home', icon: 'ant-design:home-twotone', link: '/' },

  { name: 'Restaurant', icon: 'carbon:restaurant', link: '/restaurants' },
];

const __returned__ = { links, Icon: __vite_ssr_import_1__.Icon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "py-5 bg-gradient-to-tr from-violet-100 to-purple-50" }, _attrs))}><header class="flex items-center justify-between px-[5%] lg:px-[15%] h-8">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "font-bold text-2xl lg:text-4xl"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class=""${
          _scopeId
        }><span class="text-primary"${
          _scopeId
        }> R</span>estaurantly</div>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("div", { class: "" }, [
            __vite_ssr_import_2__.createVNode("span", { class: "text-primary" }, " R"),
            __vite_ssr_import_2__.createTextVNode("estaurantly")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<nav class="flex items-centre space-x-7 text-gray-600"><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.links, (n, i) => {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
      class: "inline-block group",
      to: n.link
    }, {
      default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<div class="flex flex-row items-centre space-x-2 nav-link"${_scopeId}>`)
          _push(__vite_ssr_import_3__.ssrRenderComponent($setup["Icon"], {
            icon: n.icon,
            class: "w-4 h-5"
          }, null, _parent, _scopeId))
          _push(`<span class="font-medium"${
            _scopeId
          }>${
            __vite_ssr_import_3__.ssrInterpolate(n.name)
          }</span></div><div class="transition-hover"${
            _scopeId
          }></div>`)
        } else {
          return [
            __vite_ssr_import_2__.createVNode("div", { class: "flex flex-row items-centre space-x-2 nav-link" }, [
              __vite_ssr_import_2__.createVNode($setup["Icon"], {
                icon: n.icon,
                class: "w-4 h-5"
              }, null, 8 /* PROPS */, ["icon"]),
              __vite_ssr_import_2__.createVNode("span", { class: "font-medium" }, __vite_ssr_import_2__.toDisplayString(n.name), 1 /* TEXT */)
            ]),
            __vite_ssr_import_2__.createVNode("div", { class: "transition-hover" })
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
  })
  _push(`<!--]--></nav></header></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Nav.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/components/Nav.vue"]]);
}


// --------------------
// Request: /node_modules/@iconify/vue/dist/iconify.mjs
// Parents: 
// - /components/Nav.vue ($id_9848a0a6)
// Dependencies: 

// --------------------
const $id_006f91fb = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/@iconify/vue/dist/iconify.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/@iconify/vue/dist/iconify.mjs\".")
  })


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/Nav.vue ($id_9848a0a6)
// - /pages/demo-1.vue?macro=true ($id_1ea4b9ef)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// - /components/restaurant/Row.vue ($id_f6cab29f)
// - /pages/demo3.vue?macro=true ($id_bd952890)
// - /components/LazyText.vue ($id_cffff25c)
// - /pages/demo4.vue?macro=true ($id_7d9abb22)
// - /pages/good-[name]/demo2-[id].vue?macro=true ($id_386888dc)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/parent.vue?macro=true ($id_0be85b41)
// - /pages/parent/child-2.vue?macro=true ($id_3b3dc3b0)
// - /pages/parent/child.vue?macro=true ($id_ea97a7ed)
// - /pages/parent/validator.vue?macro=true ($id_9d3da6f7)
// - /pages/quickstart.vue?macro=true ($id_bcd290a0)
// - /components/restaurant/Table.vue ($id_85a5084f)
// - /pages/restaurants.vue?macro=true ($id_a9d5d7ec)
// - /pages/demo-1.vue ($id_f64e1822)
// - /pages/demo3.vue ($id_dc4be931)
// - /pages/demo4.vue ($id_c5e3c87a)
// - /pages/good-[name]/demo2-[id].vue ($id_def97ba0)
// - /pages/index.vue ($id_cca58e97)
// - /pages/parent/child-2.vue ($id_832bd101)
// - /pages/parent/child.vue ($id_3d38c63f)
// - /pages/parent/validator.vue ($id_cd7804c4)
// - /pages/parent.vue ($id_0baa0e63)
// - /pages/quickstart.vue ($id_bd2d66fd)
// - /pages/restaurants.vue ($id_a4446a90)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/Nav.vue ($id_9848a0a6)
// - /pages/demo-1.vue?macro=true ($id_1ea4b9ef)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// - /components/restaurant/Row.vue ($id_f6cab29f)
// - /pages/demo3.vue?macro=true ($id_bd952890)
// - /components/LazyText.vue ($id_cffff25c)
// - /pages/demo4.vue?macro=true ($id_7d9abb22)
// - /pages/good-[name]/demo2-[id].vue?macro=true ($id_386888dc)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/parent.vue?macro=true ($id_0be85b41)
// - /pages/parent/child-2.vue?macro=true ($id_3b3dc3b0)
// - /pages/parent/child.vue?macro=true ($id_ea97a7ed)
// - /pages/parent/demo5.vue?macro=true ($id_096ce7b5)
// - /pages/parent/validator.vue?macro=true ($id_9d3da6f7)
// - /pages/quickstart.vue?macro=true ($id_bcd290a0)
// - /components/restaurant/Table.vue ($id_85a5084f)
// - /pages/restaurants.vue?macro=true ($id_a9d5d7ec)
// - /pages/demo-1.vue ($id_f64e1822)
// - /pages/demo3.vue ($id_dc4be931)
// - /pages/demo4.vue ($id_c5e3c87a)
// - /pages/good-[name]/demo2-[id].vue ($id_def97ba0)
// - /pages/index.vue ($id_cca58e97)
// - /pages/parent/child-2.vue ($id_832bd101)
// - /pages/parent/child.vue ($id_3d38c63f)
// - /pages/parent/demo5.vue ($id_7aae50e9)
// - /pages/parent/validator.vue ($id_cd7804c4)
// - /pages/parent.vue ($id_0baa0e63)
// - /pages/quickstart.vue ($id_bd2d66fd)
// - /pages/restaurants.vue ($id_a4446a90)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/demo3.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /components/Footer.vue ($id_f3d8f325)
// - /components/restaurant/Row.vue ($id_f6cab29f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bd952890 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Footer.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/restaurant/Row.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_Footer = __vite_ssr_import_1__.default
  const _component_RestaurantRow = __vite_ssr_import_2__.default

  _push(`<!--[--><div class="prose"><h1 class="">------pages/demos3.vue------</h1></div>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
    custom: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${_scopeId}>xxxxxxxxxxx</div>`)
      } else {
        return [
          __vite_ssr_import_4__.createVNode("div", null, "xxxxxxxxxxx")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${_scopeId}>yyyyyyyyyyyy</div>`)
      } else {
        return [
          __vite_ssr_import_4__.createVNode("div", null, "yyyyyyyyyyyy")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_Footer, null, null, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_RestaurantRow, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/demo3.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo3.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /pages/demo3.vue?macro=true ($id_bd952890)
// - /pages/demo3.vue ($id_dc4be931)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/layouts.mjs ($id_d735555b)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_d735555b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  custom: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/custom.vue')),
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/custom.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/layouts.mjs ($id_d735555b)
// Dependencies: 
// - /components/Footer.vue ($id_f3d8f325)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d158cf1f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Footer.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Footer = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}><header class="prose"><h1>slot custom!!!!!!!</h1>`)
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "custom", {}, () => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Footer, null, null, _parent))
  }, _push, _parent)
  _push(`</header><main>`)
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</main></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/custom.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/layouts/custom.vue"]]);
}


// --------------------
// Request: /components/Footer.vue
// Parents: 
// - /layouts/custom.vue ($id_d158cf1f)
// - /pages/demo3.vue?macro=true ($id_bd952890)
// - /pages/demo3.vue ($id_dc4be931)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f3d8f325 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "prose" }, _attrs))}><h1 class="title-primary">footer-ààà</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/components/Footer.vue"]]);
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/layouts.mjs ($id_d735555b)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><h1>layout/default.vue</h1>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/layouts/default.vue"]]);
}


// --------------------
// Request: /components/restaurant/Row.vue
// Parents: 
// - /pages/demo3.vue?macro=true ($id_bd952890)
// - /components/restaurant/Table.vue ($id_85a5084f)
// - /pages/demo3.vue ($id_dc4be931)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f6cab29f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><td class="border border-slate-300">Indiana</td><td class="border border-slate-300">Indianapolis</td><td class="border border-slate-300">Indianapolis</td></tr>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/restaurant/Row.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/components/restaurant/Row.vue"]]);
}


// --------------------
// Request: /pages/demo4.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/LazyText.vue ($id_cffff25c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7d9abb22 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/LazyText.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const show = __vite_ssr_import_1__.ref(false);
const handleClick = () => {
	show.value = (!show.value);
};

const __returned__ = { show, handleClick, ref: __vite_ssr_import_1__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_lazyText = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "" }, _attrs))}>`)
  if ($setup.show) {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_lazyText, null, null, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`<button>显示/隐藏</button></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/demo4.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo4.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/LazyText.vue
// Parents: 
// - /pages/demo4.vue?macro=true ($id_7d9abb22)
// - /pages/demo4.vue ($id_c5e3c87a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cffff25c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "" }, _attrs))}>Lazy text content</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/LazyText.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/components/LazyText.vue"]]);
}


// --------------------
// Request: /pages/good-[name]/demo2-[id].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/good-[name]/demo2-[id].vue?vue&type=style&index=0&scoped=true&lang.css ($id_c16b8401)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_386888dc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const route = __vite_ssr_import_0__.useRoute();
const id = __vite_ssr_import_1__.ref(route.params.id);
const name = __vite_ssr_import_1__.ref(route.params.name);

const __returned__ = { route, id, name, ref: __vite_ssr_import_1__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "prose" }, _attrs))
  } data-v-d4772b74><h1 data-v-d4772b74>demo2-id.vue | id= ${
    __vite_ssr_import_3__.ssrInterpolate($setup.id)
  }</h1><h1 data-v-d4772b74>demo2-id.vue | name= ${
    __vite_ssr_import_3__.ssrInterpolate($setup.name)
  }</h1></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/good-[name]/demo2-[id].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/good-[name]/demo2-[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-d4772b74"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/good-[name]/demo2-[id].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/good-[name]/demo2-[id].vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/good-[name]/demo2-[id].vue?macro=true ($id_386888dc)
// - /pages/good-[name]/demo2-[id].vue ($id_def97ba0)
// Dependencies: 

// --------------------
const $id_c16b8401 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "h1[data-v-d4772b74]{--tw-gradient-from:#9333ea;--tw-gradient-to:rgba(147,51,234,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#6366f1;-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(to right,var(--tw-gradient-stops));color:transparent}";
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/Nav.vue ($id_9848a0a6)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "min-h-screen" }, _attrs))}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<main class="py-[5%] flex items-center justify-between text-center flex-col"><section class="prose"><h1>index.vue | path=&#39;/&#39;</h1><h1 class="title-primary">Welcome to the restaurantly</h1><a class="">Go to restaurants</a>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/demo-1" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>page demo-1</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "page demo-1")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/good-jspang/demo2-8" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>page demo-2</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "page demo-2")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/parent/child" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>parente-child</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "parente-child")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/parent/child-2" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>child-2</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "child-2")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</section><section><p class=""></p><div class=""><template><div class=""><h2 class=""></h2><ul class=""><template><li class=""></li></template></ul><ul class=""><li class="">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, null, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Get Started`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode("Get Started")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div></template></div></section></main></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/parent.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0be85b41 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtChild = __vite_ssr_import_1__.resolveComponent("NuxtChild")
  const _component_NuxtChild_2 = __vite_ssr_import_1__.resolveComponent("NuxtChild-2")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "prose" }, _attrs))}><h1>parente.vue</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtChild, null, null, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtChild_2, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/parent/child-2.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3b3dc3b0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "" }, _attrs))}><h1 class="title-primary">child-2.vue</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/child-2.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/child-2.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/parent/child.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ea97a7ed = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "" }, _attrs))}><h1 class="title-primary">child.vue</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/child.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/child.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/parent/demo5.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_096ce7b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_0__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/demo5.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_1__.default(_sfc_main, [['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/demo5.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/parent/validator.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/zod/lib/index.mjs ($id_64fe3fb6)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/parent/validator.vue?vue&type=style&index=0&scoped=true&lang.css ($id_7eb4630f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9d3da6f7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/zod/lib/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");



const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const FormSchema = __vite_ssr_import_0__.z.object({
  email: __vite_ssr_import_0__.z.string().email(),
  password: __vite_ssr_import_0__.z.literal(),
  confirm: __vite_ssr_import_0__.z.literal(),
});
const isRequired = (value) => (value ? true : 'This field is required');
const { value, errorMessage } = __vite_ssr_import_1__.useField('field', isRequired);

const __returned__ = { FormSchema, isRequired, value, errorMessage, z: __vite_ssr_import_0__.z, useField: __vite_ssr_import_1__.useField }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "w-screen flex justify-center" }, _attrs))
  } data-v-4afeabb4><div class="root bg-slate-200" data-v-4afeabb4><h2 data-v-4afeabb4>Create an Account</h2><p data-v-4afeabb4><input type="text" placeholder="email" data-v-4afeabb4></p><p data-v-4afeabb4><input type="password" placeholder="Password" data-v-4afeabb4></p><p data-v-4afeabb4><input type="text" placeholder="Confirm Password" data-v-4afeabb4></p><p data-v-4afeabb4><input name="field"${
    __vite_ssr_import_3__.ssrRenderAttr("value", $setup.value)
  } data-v-4afeabb4> <span data-v-4afeabb4>${
    __vite_ssr_import_3__.ssrInterpolate($setup.errorMessage)
  }</span></p><button data-v-4afeabb4>submit</button></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/parent/validator.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/validator.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-4afeabb4"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/validator.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/zod/lib/index.mjs
// Parents: 
// - /pages/parent/validator.vue?macro=true ($id_9d3da6f7)
// - /pages/parent/validator.vue ($id_cd7804c4)
// Dependencies: 

// --------------------
const $id_64fe3fb6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/zod/lib/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/zod/lib/index.mjs\".")
  })


// --------------------
// Request: /node_modules/vee-validate/dist/vee-validate.esm.js
// Parents: 
// - /pages/parent/validator.vue?macro=true ($id_9d3da6f7)
// - /pages/parent/validator.vue ($id_cd7804c4)
// - /plugins/veevalidate-componets.ts ($id_79b1b8ec)
// - /plugins/veevalidate-rules.ts ($id_5c45c07f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// --------------------
const $id_2387c42e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
  * vee-validate v4.5.11
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/index.js");


function isCallable(fn) {
    return typeof fn === 'function';
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);
function isIndex(value) {
    return Number(value) >= 0;
}
function toNumber(value) {
    const n = parseFloat(value);
    return isNaN(n) ? value : n;
}

const RULES = {};
/**
 * Adds a custom validator to the list of validation rules.
 */
function defineRule(id, validator) {
    // makes sure new rules are properly formatted.
    guardExtend(id, validator);
    RULES[id] = validator;
}
/**
 * Gets an already defined rule
 */
function resolveRule(id) {
    return RULES[id];
}
/**
 * Guards from extension violations.
 */
function guardExtend(id, validator) {
    if (isCallable(validator)) {
        return;
    }
    throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}

const FormContextKey = Symbol('vee-validate-form');
const FieldContextKey = Symbol('vee-validate-field-instance');
const IS_ABSENT = Symbol('Default empty value');

function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}
/**
 * Checks if an tag name is a native HTML tag and not a Vue component
 */
function isHTMLTag(tag) {
    return ['input', 'textarea', 'select'].includes(tag);
}
/**
 * Checks if an input is of type file
 */
function isFileInputNode(tag, attrs) {
    return isHTMLTag(tag) && attrs.type === 'file';
}
function isYupValidator(value) {
    return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
    return type === 'checkbox' || type === 'radio';
}
function isContainerValue(value) {
    return isObject(value) || Array.isArray(value);
}
/**
 * True if the value is an empty object or array
 */
function isEmptyContainer(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isObject(value) && Object.keys(value).length === 0;
}
/**
 * Checks if the path opted out of nested fields using `[fieldName]` syntax
 */
function isNotNestedPath(path) {
    return /^\[.+\]$/i.test(path);
}
/**
 * Checks if an element is a native HTML5 multi-select input element
 */
function isNativeMultiSelect(el) {
    return isNativeSelect(el) && el.multiple;
}
/**
 * Checks if an element is a native HTML5 select input element
 */
function isNativeSelect(el) {
    return el.tagName === 'SELECT';
}
/**
 * Checks if a tag name with attrs object will render a native multi-select element
 */
function isNativeMultiSelectNode(tag, attrs) {
    // The falsy value array is the values that Vue won't add the `multiple` prop if it has one of these values
    const hasTruthyBindingValue = ![false, null, undefined, 0].includes(attrs.multiple) && !Number.isNaN(attrs.multiple);
    return tag === 'select' && 'multiple' in attrs && hasTruthyBindingValue;
}
/**
 * Checks if a node should have a `:value` binding or not
 *
 * These nodes should not have a value binding
 * For files, because they are not reactive
 * For multi-selects because the value binding will reset the value
 */
function shouldHaveValueBinding(tag, attrs) {
    return isNativeMultiSelectNode(tag, attrs) || isFileInputNode(tag, attrs);
}
function isFormSubmitEvent(evt) {
    return isEvent(evt) && evt.target && 'submit' in evt.target;
}
function isEvent(evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE and Cypress #3161
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
}
function isPropPresent(obj, prop) {
    return prop in obj && obj[prop] !== IS_ABSENT;
}

function cleanupNonNestedPath(path) {
    if (isNotNestedPath(path)) {
        return path.replace(/\[|\]/gi, '');
    }
    return path;
}
function getFromPath(object, path, fallback) {
    if (!object) {
        return fallback;
    }
    if (isNotNestedPath(path)) {
        return object[cleanupNonNestedPath(path)];
    }
    const resolvedValue = (path || '')
        .split(/\.|\[(\d+)\]/)
        .filter(Boolean)
        .reduce((acc, propKey) => {
        if (isContainerValue(acc) && propKey in acc) {
            return acc[propKey];
        }
        return fallback;
    }, object);
    return resolvedValue;
}
/**
 * Sets a nested property value in a path, creates the path properties if it doesn't exist
 */
function setInPath(object, path, value) {
    if (isNotNestedPath(path)) {
        object[cleanupNonNestedPath(path)] = value;
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, set it
        if (i === keys.length - 1) {
            acc[keys[i]] = value;
            return;
        }
        // Key does not exist, create a container for it
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            // container can be either an object or an array depending on the next key if it exists
            acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
        }
        acc = acc[keys[i]];
    }
}
function unset(object, key) {
    if (Array.isArray(object) && isIndex(key)) {
        object.splice(Number(key), 1);
        return;
    }
    if (isObject(object)) {
        delete object[key];
    }
}
/**
 * Removes a nested property from object
 */
function unsetPath(object, path) {
    if (isNotNestedPath(path)) {
        delete object[cleanupNonNestedPath(path)];
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, unset it
        if (i === keys.length - 1) {
            unset(acc, keys[i]);
            break;
        }
        // Key does not exist, exit
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            break;
        }
        acc = acc[keys[i]];
    }
    const pathValues = keys.map((_, idx) => {
        return getFromPath(object, keys.slice(0, idx).join('.'));
    });
    for (let i = pathValues.length - 1; i >= 0; i--) {
        if (!isEmptyContainer(pathValues[i])) {
            continue;
        }
        if (i === 0) {
            unset(object, keys[0]);
            continue;
        }
        unset(pathValues[i - 1], keys[i - 1]);
    }
}
/**
 * A typed version of Object.keys
 */
function keysOf(record) {
    return Object.keys(record);
}
// Uses same component provide as its own injections
// Due to changes in https://github.com/vuejs/vue-next/pull/2424
function injectWithSelf(symbol, def = undefined) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    return (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || __vite_ssr_import_0__.inject(symbol, def);
}
function warn(message) {
    __vite_ssr_import_0__.warn(`[vee-validate]: ${message}`);
}
/**
 * Ensures we deal with a singular field value
 */
function normalizeField(field) {
    if (Array.isArray(field)) {
        return field[0];
    }
    return field;
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
    if (Array.isArray(currentValue)) {
        const newVal = [...currentValue];
        const idx = newVal.indexOf(checkedValue);
        idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue);
        return newVal;
    }
    return currentValue === checkedValue ? uncheckedValue : checkedValue;
}
/**
 * Creates a throttled function that only invokes the provided function (`func`) at most once per within a given number of milliseconds
 * (`limit`)
 */
function throttle(func, limit) {
    let inThrottle;
    let lastResult;
    return function (...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
            lastResult = func.apply(context, args);
        }
        return lastResult;
    };
}
function debounceAsync(inner, ms = 0) {
    let timer = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(() => {
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach(r => r(result));
            resolves = [];
        }, ms);
        return new Promise(resolve => resolves.push(resolve));
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeChildren = (tag, context, slotProps) => {
    if (!context.slots.default) {
        return context.slots.default;
    }
    if (typeof tag === 'string' || !tag) {
        return context.slots.default(slotProps());
    }
    return {
        default: () => { var _a, _b; return (_b = (_a = context.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a, slotProps()); },
    };
};
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function getBoundValue(el) {
    if (hasValueBinding(el)) {
        return el._value;
    }
    return undefined;
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function hasValueBinding(el) {
    return '_value' in el;
}

function normalizeEventValue(value) {
    if (!isEvent(value)) {
        return value;
    }
    const input = value.target;
    // Vue sets the current bound value on `_value` prop
    // for checkboxes it it should fetch the value binding type as is (boolean instead of string)
    if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
        return getBoundValue(input);
    }
    if (input.type === 'file' && input.files) {
        return Array.from(input.files);
    }
    if (isNativeMultiSelect(input)) {
        return Array.from(input.options)
            .filter(opt => opt.selected && !opt.disabled)
            .map(getBoundValue);
    }
    // makes sure we get the actual `option` bound value
    // #3440
    if (isNativeSelect(input)) {
        const selectedOption = Array.from(input.options).find(opt => opt.selected);
        return selectedOption ? getBoundValue(selectedOption) : input.value;
    }
    return input.value;
}

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    const acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false,
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce((prev, curr) => {
            const params = normalizeParams(rules[curr]);
            if (rules[curr] !== false) {
                prev[curr] = buildParams(params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        return acc;
    }
    return rules.split('|').reduce((prev, rule) => {
        const parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.params);
        return prev;
    }, acc);
}
/**
 * Normalizes a rule param.
 */
function normalizeParams(params) {
    if (params === true) {
        return [];
    }
    if (Array.isArray(params)) {
        return params;
    }
    if (isObject(params)) {
        return params;
    }
    return [params];
}
function buildParams(provided) {
    const mapValueToLocator = (value) => {
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            return createLocator(value.slice(1));
        }
        return value;
    };
    if (Array.isArray(provided)) {
        return provided.map(mapValueToLocator);
    }
    // #3073
    if (provided instanceof RegExp) {
        return [provided];
    }
    return Object.keys(provided).reduce((prev, key) => {
        prev[key] = mapValueToLocator(provided[key]);
        return prev;
    }, {});
}
/**
 * Parses a rule string expression.
 */
const parseRule = (rule) => {
    let params = [];
    const name = rule.split(':')[0];
    if (rule.includes(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return { name, params };
};
function createLocator(value) {
    const locator = (crossTable) => {
        const val = getFromPath(crossTable, value) || crossTable[value];
        return val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(isLocator);
    }
    return keysOf(params)
        .filter(key => isLocator(params[key]))
        .map(key => params[key]);
}

const DEFAULT_CONFIG = {
    generateMessage: ({ field }) => `${field} is not valid.`,
    bails: true,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
const setConfig = (newConf) => {
    currentConfig = Object.assign(Object.assign({}, currentConfig), newConf);
};
const configure = setConfig;

/**
 * Validates a value against the rules.
 */
async function validate(value, rules, options = {}) {
    const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
    const field = {
        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
        rules,
        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
        formData: (options === null || options === void 0 ? void 0 : options.values) || {},
    };
    const result = await _validate(field, value);
    const errors = result.errors;
    return {
        errors,
        valid: !errors.length,
    };
}
/**
 * Starts the validation process.
 */
async function _validate(field, value) {
    if (isYupValidator(field.rules)) {
        return validateFieldWithYup(value, field.rules, { bails: field.bails });
    }
    // if a generic function or chain of generic functions
    if (isCallable(field.rules) || Array.isArray(field.rules)) {
        const ctx = {
            field: field.name,
            form: field.formData,
            value: value,
        };
        // Normalize the pipeline
        const pipeline = Array.isArray(field.rules) ? field.rules : [field.rules];
        const length = pipeline.length;
        const errors = [];
        for (let i = 0; i < length; i++) {
            const rule = pipeline[i];
            const result = await rule(value, ctx);
            const isValid = typeof result !== 'string' && result;
            if (isValid) {
                continue;
            }
            const message = typeof result === 'string' ? result : _generateFieldError(ctx);
            errors.push(message);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
        return {
            errors,
        };
    }
    const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(field.rules) });
    const errors = [];
    const rulesKeys = Object.keys(normalizedContext.rules);
    const length = rulesKeys.length;
    for (let i = 0; i < length; i++) {
        const rule = rulesKeys[i];
        const result = await _test(normalizedContext, value, {
            name: rule,
            params: normalizedContext.rules[rule],
        });
        if (result.error) {
            errors.push(result.error);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
    }
    return {
        errors,
    };
}
/**
 * Handles yup validation
 */
async function validateFieldWithYup(value, validator, opts) {
    var _a;
    const errors = await validator
        .validate(value, {
        abortEarly: (_a = opts.bails) !== null && _a !== void 0 ? _a : true,
    })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
            return err.errors;
        }
        // re-throw the error so we don't hide it
        throw err;
    });
    return {
        errors,
    };
}
/**
 * Tests a single input value against a rule.
 */
async function _test(field, value, rule) {
    const validator = resolveRule(rule.name);
    if (!validator) {
        throw new Error(`No such validator '${rule.name}' exists.`);
    }
    const params = fillTargetValues(rule.params, field.formData);
    const ctx = {
        field: field.name,
        value,
        form: field.formData,
        rule: Object.assign(Object.assign({}, rule), { params }),
    };
    const result = await validator(value, params, ctx);
    if (typeof result === 'string') {
        return {
            error: result,
        };
    }
    return {
        error: result ? undefined : _generateFieldError(ctx),
    };
}
/**
 * Generates error messages.
 */
function _generateFieldError(fieldCtx) {
    const message = getConfig().generateMessage;
    if (!message) {
        return 'Field is invalid';
    }
    return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
    const normalize = (value) => {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    if (Array.isArray(params)) {
        return params.map(normalize);
    }
    return Object.keys(params).reduce((acc, param) => {
        acc[param] = normalize(params[param]);
        return acc;
    }, {});
}
async function validateYupSchema(schema, values) {
    const errorObjects = await schema
        .validate(values, { abortEarly: false })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name !== 'ValidationError') {
            throw err;
        }
        // list of aggregated errors
        return err.inner || [];
    });
    const results = {};
    const errors = {};
    for (const error of errorObjects) {
        const messages = error.errors;
        results[error.path] = { valid: !messages.length, errors: messages };
        if (messages.length) {
            errors[error.path] = messages[0];
        }
    }
    return {
        valid: !errorObjects.length,
        results,
        errors,
    };
}
async function validateObjectSchema(schema, values, opts) {
    const paths = keysOf(schema);
    const validations = paths.map(async (path) => {
        var _a, _b, _c;
        const fieldResult = await validate(getFromPath(values, path), schema[path], {
            name: ((_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0 ? void 0 : _a[path]) || path,
            values: values,
            bails: (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0 ? void 0 : _b[path]) !== null && _c !== void 0 ? _c : true,
        });
        return Object.assign(Object.assign({}, fieldResult), { path });
    });
    let isAllValid = true;
    const validationResults = await Promise.all(validations);
    const results = {};
    const errors = {};
    for (const result of validationResults) {
        results[result.path] = {
            valid: result.valid,
            errors: result.errors,
        };
        if (!result.valid) {
            isAllValid = false;
            errors[result.path] = result.errors[0];
        }
    }
    return {
        valid: isAllValid,
        results,
        errors,
    };
}

function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

var es6 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

let ID_COUNTER = 0;
function useFieldState(path, init) {
    const { value, initialValue, setInitialValue } = _useFieldValue(path, init.modelValue, !init.standalone);
    const { errorMessage, errors, setErrors } = _useFieldErrors(path, !init.standalone);
    const meta = _useFieldMeta(value, initialValue, errors);
    const id = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER;
    function setState(state) {
        var _a;
        if ('value' in state) {
            value.value = state.value;
        }
        if ('errors' in state) {
            setErrors(state.errors);
        }
        if ('touched' in state) {
            meta.touched = (_a = state.touched) !== null && _a !== void 0 ? _a : meta.touched;
        }
        if ('initialValue' in state) {
            setInitialValue(state.initialValue);
        }
    }
    return {
        id,
        path,
        value,
        initialValue,
        meta,
        errors,
        errorMessage,
        setState,
    };
}
/**
 * Creates the field value and resolves the initial value
 */
function _useFieldValue(path, modelValue, shouldInjectForm) {
    const form = shouldInjectForm ? injectWithSelf(FormContextKey, undefined) : undefined;
    const modelRef = __vite_ssr_import_0__.ref(__vite_ssr_import_0__.unref(modelValue));
    function resolveInitialValue() {
        if (!form) {
            return __vite_ssr_import_0__.unref(modelRef);
        }
        return getFromPath(form.meta.value.initialValues, __vite_ssr_import_0__.unref(path), __vite_ssr_import_0__.unref(modelRef));
    }
    function setInitialValue(value) {
        if (!form) {
            modelRef.value = value;
            return;
        }
        form.setFieldInitialValue(__vite_ssr_import_0__.unref(path), value);
    }
    const initialValue = __vite_ssr_import_0__.computed(resolveInitialValue);
    // if no form is associated, use a regular ref.
    if (!form) {
        const value = __vite_ssr_import_0__.ref(resolveInitialValue());
        return {
            value,
            initialValue,
            setInitialValue,
        };
    }
    // to set the initial value, first check if there is a current value, if there is then use it.
    // otherwise use the configured initial value if it exists.
    // prioritize model value over form values
    // #3429
    const currentValue = modelValue ? __vite_ssr_import_0__.unref(modelValue) : getFromPath(form.values, __vite_ssr_import_0__.unref(path), __vite_ssr_import_0__.unref(initialValue));
    form.stageInitialValue(__vite_ssr_import_0__.unref(path), currentValue);
    // otherwise use a computed setter that triggers the `setFieldValue`
    const value = __vite_ssr_import_0__.computed({
        get() {
            return getFromPath(form.values, __vite_ssr_import_0__.unref(path));
        },
        set(newVal) {
            form.setFieldValue(__vite_ssr_import_0__.unref(path), newVal);
        },
    });
    return {
        value,
        initialValue,
        setInitialValue,
    };
}
/**
 * Creates meta flags state and some associated effects with them
 */
function _useFieldMeta(currentValue, initialValue, errors) {
    const meta = __vite_ssr_import_0__.reactive({
        touched: false,
        pending: false,
        valid: true,
        validated: !!__vite_ssr_import_0__.unref(errors).length,
        initialValue: __vite_ssr_import_0__.computed(() => __vite_ssr_import_0__.unref(initialValue)),
        dirty: __vite_ssr_import_0__.computed(() => {
            return !es6(__vite_ssr_import_0__.unref(currentValue), __vite_ssr_import_0__.unref(initialValue));
        }),
    });
    __vite_ssr_import_0__.watch(errors, value => {
        meta.valid = !value.length;
    }, {
        immediate: true,
        flush: 'sync',
    });
    return meta;
}
/**
 * Creates the error message state for the field state
 */
function _useFieldErrors(path, shouldInjectForm) {
    const form = shouldInjectForm ? injectWithSelf(FormContextKey, undefined) : undefined;
    function normalizeErrors(messages) {
        if (!messages) {
            return [];
        }
        return Array.isArray(messages) ? messages : [messages];
    }
    if (!form) {
        const errors = __vite_ssr_import_0__.ref([]);
        return {
            errors,
            errorMessage: __vite_ssr_import_0__.computed(() => errors.value[0]),
            setErrors: (messages) => {
                errors.value = normalizeErrors(messages);
            },
        };
    }
    const errors = __vite_ssr_import_0__.computed(() => form.errorBag.value[__vite_ssr_import_0__.unref(path)] || []);
    return {
        errors,
        errorMessage: __vite_ssr_import_0__.computed(() => errors.value[0]),
        setErrors: (messages) => {
            form.setFieldErrorBag(__vite_ssr_import_0__.unref(path), normalizeErrors(messages));
        },
    };
}

function installDevtoolsPlugin(app) {
    if ((process.env.NODE_ENV !== 'production')) {
        __vite_ssr_import_1__.setupDevtoolsPlugin({
            id: 'vee-validate-devtools-plugin',
            label: 'VeeValidate Plugin',
            packageName: 'vee-validate',
            homepage: 'https://vee-validate.logaretm.com/v4',
            app,
            logo: 'https://vee-validate.logaretm.com/v4/logo.png',
        }, setupApiHooks);
    }
}
const DEVTOOLS_FORMS = {};
const DEVTOOLS_FIELDS = {};
let API;
const refreshInspector = throttle(() => {
    setTimeout(async () => {
        await __vite_ssr_import_0__.nextTick();
        API === null || API === void 0 ? void 0 : API.sendInspectorState(INSPECTOR_ID);
        API === null || API === void 0 ? void 0 : API.sendInspectorTree(INSPECTOR_ID);
    }, 100);
}, 100);
function registerFormWithDevTools(form) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FORMS[form.formId] = Object.assign({}, form);
    DEVTOOLS_FORMS[form.formId]._vm = vm;
    __vite_ssr_import_0__.onUnmounted(() => {
        delete DEVTOOLS_FORMS[form.formId];
        refreshInspector();
    });
    refreshInspector();
}
function registerSingleFieldWithDevtools(field) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FIELDS[field.id] = Object.assign({}, field);
    DEVTOOLS_FIELDS[field.id]._vm = vm;
    __vite_ssr_import_0__.onUnmounted(() => {
        delete DEVTOOLS_FIELDS[field.id];
        refreshInspector();
    });
    refreshInspector();
}
const INSPECTOR_ID = 'vee-validate-inspector';
const COLORS = {
    error: 0xbd4b4b,
    success: 0x06d77b,
    unknown: 0x54436b,
    white: 0xffffff,
    black: 0x000000,
    blue: 0x035397,
    purple: 0xb980f0,
    orange: 0xf5a962,
    gray: 0xbbbfca,
};
let SELECTED_NODE = null;
function setupApiHooks(api) {
    API = api;
    api.addInspector({
        id: INSPECTOR_ID,
        icon: 'rule',
        label: 'vee-validate',
        noSelectionText: 'Select a vee-validate node to inspect',
        actions: [
            {
                icon: 'done_outline',
                tooltip: 'Validate selected item',
                action: async () => {
                    if (!SELECTED_NODE) {
                        console.error('There is not a valid selected vee-validate node or component');
                        return;
                    }
                    const result = await SELECTED_NODE.validate();
                    console.log(result);
                },
            },
            {
                icon: 'delete_sweep',
                tooltip: 'Clear validation state of the selected item',
                action: () => {
                    if (!SELECTED_NODE) {
                        console.error('There is not a valid selected vee-validate node or component');
                        return;
                    }
                    if ('id' in SELECTED_NODE) {
                        SELECTED_NODE.resetField();
                        return;
                    }
                    SELECTED_NODE.resetForm();
                },
            },
        ],
    });
    api.on.getInspectorTree(payload => {
        if (payload.inspectorId !== INSPECTOR_ID) {
            return;
        }
        const forms = Object.values(DEVTOOLS_FORMS);
        const fields = Object.values(DEVTOOLS_FIELDS);
        payload.rootNodes = [
            ...forms.map(mapFormForDevtoolsInspector),
            ...fields.map(field => mapFieldForDevtoolsInspector(field)),
        ];
    });
    api.on.getInspectorState((payload, ctx) => {
        if (payload.inspectorId !== INSPECTOR_ID || ctx.currentTab !== `custom-inspector:${INSPECTOR_ID}`) {
            return;
        }
        const { form, field, type } = decodeNodeId(payload.nodeId);
        if (form && type === 'form') {
            payload.state = buildFormState(form);
            SELECTED_NODE = form;
            return;
        }
        if (field && type === 'field') {
            payload.state = buildFieldState(field);
            SELECTED_NODE = field;
            return;
        }
        SELECTED_NODE = null;
    });
}
function mapFormForDevtoolsInspector(form) {
    const { textColor, bgColor } = getTagTheme(form);
    const formTreeNodes = {};
    Object.values(form.fieldsByPath.value).forEach(field => {
        const fieldInstance = Array.isArray(field) ? field[0] : field;
        if (!fieldInstance) {
            return;
        }
        setInPath(formTreeNodes, __vite_ssr_import_0__.unref(fieldInstance.name), mapFieldForDevtoolsInspector(fieldInstance, form));
    });
    function buildFormTree(tree, path = []) {
        const key = [...path].pop();
        if ('id' in tree) {
            return Object.assign(Object.assign({}, tree), { label: key || tree.label });
        }
        if (isObject(tree)) {
            return {
                id: `${path.join('.')}`,
                label: key || '',
                children: Object.keys(tree).map(key => buildFormTree(tree[key], [...path, key])),
            };
        }
        if (Array.isArray(tree)) {
            return {
                id: `${path.join('.')}`,
                label: `${key}[]`,
                children: tree.map((c, idx) => buildFormTree(c, [...path, String(idx)])),
            };
        }
        return { id: '', label: '', children: [] };
    }
    const { children } = buildFormTree(formTreeNodes);
    return {
        id: encodeNodeId(form),
        label: 'Form',
        children,
        tags: [
            {
                label: 'Form',
                textColor,
                backgroundColor: bgColor,
            },
            {
                label: `${Object.keys(form.fieldsByPath.value).length} fields`,
                textColor: COLORS.white,
                backgroundColor: COLORS.unknown,
            },
        ],
    };
}
function mapFieldForDevtoolsInspector(field, form) {
    const fieldInstance = normalizeField(field);
    const { textColor, bgColor } = getTagTheme(fieldInstance);
    const isGroup = Array.isArray(field) && field.length > 1;
    return {
        id: encodeNodeId(form, fieldInstance, !isGroup),
        label: __vite_ssr_import_0__.unref(fieldInstance.name),
        children: Array.isArray(field) ? field.map(fieldItem => mapFieldForDevtoolsInspector(fieldItem, form)) : undefined,
        tags: [
            isGroup
                ? undefined
                : {
                    label: 'Field',
                    textColor,
                    backgroundColor: bgColor,
                },
            !form
                ? {
                    label: 'Standalone',
                    textColor: COLORS.black,
                    backgroundColor: COLORS.gray,
                }
                : undefined,
            !isGroup && fieldInstance.type === 'checkbox'
                ? {
                    label: 'Checkbox',
                    textColor: COLORS.white,
                    backgroundColor: COLORS.blue,
                }
                : undefined,
            !isGroup && fieldInstance.type === 'radio'
                ? {
                    label: 'Radio',
                    textColor: COLORS.white,
                    backgroundColor: COLORS.purple,
                }
                : undefined,
            isGroup
                ? {
                    label: 'Group',
                    textColor: COLORS.black,
                    backgroundColor: COLORS.orange,
                }
                : undefined,
        ].filter(Boolean),
    };
}
function encodeNodeId(form, field, encodeIndex = true) {
    const fieldPath = form ? __vite_ssr_import_0__.unref(field === null || field === void 0 ? void 0 : field.name) : field === null || field === void 0 ? void 0 : field.id;
    const fieldGroup = fieldPath ? form === null || form === void 0 ? void 0 : form.fieldsByPath.value[fieldPath] : undefined;
    let idx;
    if (encodeIndex && field && Array.isArray(fieldGroup)) {
        idx = fieldGroup.indexOf(field);
    }
    const idObject = { f: form === null || form === void 0 ? void 0 : form.formId, ff: fieldPath, idx, type: field ? 'field' : 'form' };
    return btoa(JSON.stringify(idObject));
}
function decodeNodeId(nodeId) {
    try {
        const idObject = JSON.parse(atob(nodeId));
        const form = DEVTOOLS_FORMS[idObject.f];
        if (!form && idObject.ff) {
            const field = DEVTOOLS_FIELDS[idObject.ff];
            if (!field) {
                return {};
            }
            return {
                type: idObject.type,
                field,
            };
        }
        if (!form) {
            return {};
        }
        const fieldGroup = form.fieldsByPath.value[idObject.ff];
        return {
            type: idObject.type,
            form,
            field: Array.isArray(fieldGroup) ? fieldGroup[idObject.idx || 0] : fieldGroup,
        };
    }
    catch (err) {
        // console.error(`Devtools: [vee-validate] Failed to parse node id ${nodeId}`);
    }
    return {};
}
function buildFieldState(field) {
    const { errors, meta, value } = field;
    return {
        'Field state': [
            { key: 'errors', value: errors.value },
            {
                key: 'initialValue',
                value: meta.initialValue,
            },
            {
                key: 'currentValue',
                value: value.value,
            },
            {
                key: 'touched',
                value: meta.touched,
            },
            {
                key: 'dirty',
                value: meta.dirty,
            },
            {
                key: 'valid',
                value: meta.valid,
            },
        ],
    };
}
function buildFormState(form) {
    const { errorBag, meta, values, isSubmitting, submitCount } = form;
    return {
        'Form state': [
            {
                key: 'submitCount',
                value: submitCount.value,
            },
            {
                key: 'isSubmitting',
                value: isSubmitting.value,
            },
            {
                key: 'touched',
                value: meta.value.touched,
            },
            {
                key: 'dirty',
                value: meta.value.dirty,
            },
            {
                key: 'valid',
                value: meta.value.valid,
            },
            {
                key: 'initialValues',
                value: meta.value.initialValues,
            },
            {
                key: 'currentValues',
                value: values,
            },
            {
                key: 'errors',
                value: keysOf(errorBag.value).reduce((acc, key) => {
                    var _a;
                    const message = (_a = errorBag.value[key]) === null || _a === void 0 ? void 0 : _a[0];
                    if (message) {
                        acc[key] = message;
                    }
                    return acc;
                }, {}),
            },
        ],
    };
}
/**
 * Resolves the tag color based on the form state
 */
function getTagTheme(fieldOrForm) {
    // const fallbackColors = {
    //   bgColor: COLORS.unknown,
    //   textColor: COLORS.white,
    // };
    const isValid = 'id' in fieldOrForm ? fieldOrForm.meta.valid : fieldOrForm.meta.value.valid;
    return {
        bgColor: isValid ? COLORS.success : COLORS.error,
        textColor: isValid ? COLORS.black : COLORS.white,
    };
}

/**
 * Creates a field composite.
 */
function useField(name, rules, opts) {
    if (hasCheckedAttr(opts === null || opts === void 0 ? void 0 : opts.type)) {
        return useCheckboxField(name, rules, opts);
    }
    return _useField(name, rules, opts);
}
function _useField(name, rules, opts) {
    const { initialValue: modelValue, validateOnMount, bails, type, checkedValue, label, validateOnValueUpdate, uncheckedValue, standalone, } = normalizeOptions(__vite_ssr_import_0__.unref(name), opts);
    const form = !standalone ? injectWithSelf(FormContextKey) : undefined;
    // a flag indicating if the field is about to be removed/unmounted.
    let markedForRemoval = false;
    const { id, value, initialValue, meta, setState, errors, errorMessage } = useFieldState(name, {
        modelValue,
        standalone,
    });
    /**
     * Handles common onBlur meta update
     */
    const handleBlur = () => {
        meta.touched = true;
    };
    const normalizedRules = __vite_ssr_import_0__.computed(() => {
        let rulesValue = __vite_ssr_import_0__.unref(rules);
        const schema = __vite_ssr_import_0__.unref(form === null || form === void 0 ? void 0 : form.schema);
        if (schema && !isYupValidator(schema)) {
            rulesValue = extractRuleFromSchema(schema, __vite_ssr_import_0__.unref(name)) || rulesValue;
        }
        if (isYupValidator(rulesValue) || isCallable(rulesValue) || Array.isArray(rulesValue)) {
            return rulesValue;
        }
        return normalizeRules(rulesValue);
    });
    async function validateCurrentValue(mode) {
        var _a, _b;
        if (form === null || form === void 0 ? void 0 : form.validateSchema) {
            return (_a = (await form.validateSchema(mode)).results[__vite_ssr_import_0__.unref(name)]) !== null && _a !== void 0 ? _a : { valid: true, errors: [] };
        }
        return validate(value.value, normalizedRules.value, {
            name: __vite_ssr_import_0__.unref(label) || __vite_ssr_import_0__.unref(name),
            values: (_b = form === null || form === void 0 ? void 0 : form.values) !== null && _b !== void 0 ? _b : {},
            bails,
        });
    }
    async function validateWithStateMutation() {
        meta.pending = true;
        meta.validated = true;
        const result = await validateCurrentValue('validated-only');
        if (markedForRemoval) {
            result.valid = true;
            result.errors = [];
        }
        setState({ errors: result.errors });
        meta.pending = false;
        return result;
    }
    async function validateValidStateOnly() {
        const result = await validateCurrentValue('silent');
        if (markedForRemoval) {
            result.valid = true;
        }
        meta.valid = result.valid;
        return result;
    }
    function validate$1(opts) {
        if (!(opts === null || opts === void 0 ? void 0 : opts.mode) || (opts === null || opts === void 0 ? void 0 : opts.mode) === 'force') {
            return validateWithStateMutation();
        }
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === 'validated-only') {
            return validateWithStateMutation();
        }
        return validateValidStateOnly();
    }
    // Common input/change event handler
    const handleChange = (e, shouldValidate = true) => {
        const newValue = normalizeEventValue(e);
        value.value = newValue;
        if (!validateOnValueUpdate && shouldValidate) {
            validateWithStateMutation();
        }
    };
    // Runs the initial validation
    __vite_ssr_import_0__.onMounted(() => {
        if (validateOnMount) {
            return validateWithStateMutation();
        }
        // validate self initially if no form was handling this
        // forms should have their own initial silent validation run to make things more efficient
        if (!form || !form.validateSchema) {
            validateValidStateOnly();
        }
    });
    function setTouched(isTouched) {
        meta.touched = isTouched;
    }
    let unwatchValue;
    function watchValue() {
        unwatchValue = __vite_ssr_import_0__.watch(value, validateOnValueUpdate ? validateWithStateMutation : validateValidStateOnly, {
            deep: true,
        });
    }
    watchValue();
    function resetField(state) {
        var _a;
        unwatchValue === null || unwatchValue === void 0 ? void 0 : unwatchValue();
        const newValue = state && 'value' in state ? state.value : initialValue.value;
        setState({
            value: klona(newValue),
            initialValue: klona(newValue),
            touched: (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : false,
            errors: (state === null || state === void 0 ? void 0 : state.errors) || [],
        });
        meta.pending = false;
        meta.validated = false;
        validateValidStateOnly();
        // need to watch at next tick to avoid triggering the value watcher
        __vite_ssr_import_0__.nextTick(() => {
            watchValue();
        });
    }
    function setValue(newValue) {
        value.value = newValue;
    }
    function setErrors(errors) {
        setState({ errors: Array.isArray(errors) ? errors : [errors] });
    }
    const field = {
        id,
        name,
        label,
        value,
        meta,
        errors,
        errorMessage,
        type,
        checkedValue,
        uncheckedValue,
        bails,
        resetField,
        handleReset: () => resetField(),
        validate: validate$1,
        handleChange,
        handleBlur,
        setState,
        setTouched,
        setErrors,
        setValue,
    };
    __vite_ssr_import_0__.provide(FieldContextKey, field);
    if (__vite_ssr_import_0__.isRef(rules) && typeof __vite_ssr_import_0__.unref(rules) !== 'function') {
        __vite_ssr_import_0__.watch(rules, (value, oldValue) => {
            if (es6(value, oldValue)) {
                return;
            }
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }, {
            deep: true,
        });
    }
    if ((process.env.NODE_ENV !== 'production')) {
        field._vm = __vite_ssr_import_0__.getCurrentInstance();
        __vite_ssr_import_0__.watch(() => (Object.assign(Object.assign({ errors: errors.value }, meta), { value: value.value })), refreshInspector, {
            deep: true,
        });
        if (!form) {
            registerSingleFieldWithDevtools(field);
        }
    }
    // if no associated form return the field API immediately
    if (!form) {
        return field;
    }
    // associate the field with the given form
    form.register(field);
    __vite_ssr_import_0__.onBeforeUnmount(() => {
        markedForRemoval = true;
        form.unregister(field);
    });
    // extract cross-field dependencies in a computed prop
    const dependencies = __vite_ssr_import_0__.computed(() => {
        const rulesVal = normalizedRules.value;
        // is falsy, a function schema or a yup schema
        if (!rulesVal || isCallable(rulesVal) || isYupValidator(rulesVal) || Array.isArray(rulesVal)) {
            return {};
        }
        return Object.keys(rulesVal).reduce((acc, rule) => {
            const deps = extractLocators(rulesVal[rule])
                .map((dep) => dep.__locatorRef)
                .reduce((depAcc, depName) => {
                const depValue = getFromPath(form.values, depName) || form.values[depName];
                if (depValue !== undefined) {
                    depAcc[depName] = depValue;
                }
                return depAcc;
            }, {});
            Object.assign(acc, deps);
            return acc;
        }, {});
    });
    // Adds a watcher that runs the validation whenever field dependencies change
    __vite_ssr_import_0__.watch(dependencies, (deps, oldDeps) => {
        // Skip if no dependencies or if the field wasn't manipulated
        if (!Object.keys(deps).length) {
            return;
        }
        const shouldValidate = !es6(deps, oldDeps);
        if (shouldValidate) {
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }
    });
    return field;
}
/**
 * Normalizes partial field options to include the full options
 */
function normalizeOptions(name, opts) {
    const defaults = () => ({
        initialValue: undefined,
        validateOnMount: false,
        bails: true,
        rules: '',
        label: name,
        validateOnValueUpdate: true,
        standalone: false,
    });
    if (!opts) {
        return defaults();
    }
    // TODO: Deprecate this in next major release
    const checkedValue = 'valueProp' in opts ? opts.valueProp : opts.checkedValue;
    return Object.assign(Object.assign(Object.assign({}, defaults()), (opts || {})), { checkedValue });
}
/**
 * Extracts the validation rules from a schema
 */
function extractRuleFromSchema(schema, fieldName) {
    // no schema at all
    if (!schema) {
        return undefined;
    }
    // there is a key on the schema object for this field
    return schema[fieldName];
}
function useCheckboxField(name, rules, opts) {
    const form = !(opts === null || opts === void 0 ? void 0 : opts.standalone) ? injectWithSelf(FormContextKey) : undefined;
    const checkedValue = opts === null || opts === void 0 ? void 0 : opts.checkedValue;
    const uncheckedValue = opts === null || opts === void 0 ? void 0 : opts.uncheckedValue;
    function patchCheckboxApi(field) {
        const handleChange = field.handleChange;
        const checked = __vite_ssr_import_0__.computed(() => {
            const currentValue = __vite_ssr_import_0__.unref(field.value);
            const checkedVal = __vite_ssr_import_0__.unref(checkedValue);
            return Array.isArray(currentValue) ? currentValue.includes(checkedVal) : checkedVal === currentValue;
        });
        function handleCheckboxChange(e, shouldValidate = true) {
            var _a, _b;
            if (checked.value === ((_b = (_a = e) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.checked)) {
                return;
            }
            let newValue = normalizeEventValue(e);
            // Single checkbox field without a form to toggle it's value
            if (!form) {
                newValue = resolveNextCheckboxValue(__vite_ssr_import_0__.unref(field.value), __vite_ssr_import_0__.unref(checkedValue), __vite_ssr_import_0__.unref(uncheckedValue));
            }
            handleChange(newValue, shouldValidate);
        }
        __vite_ssr_import_0__.onBeforeUnmount(() => {
            // toggles the checkbox value if it was checked
            if (checked.value) {
                handleCheckboxChange(__vite_ssr_import_0__.unref(checkedValue), false);
            }
        });
        return Object.assign(Object.assign({}, field), { checked,
            checkedValue,
            uncheckedValue, handleChange: handleCheckboxChange });
    }
    return patchCheckboxApi(_useField(name, rules, opts));
}

const FieldImpl = __vite_ssr_import_0__.defineComponent({
    name: 'Field',
    inheritAttrs: false,
    props: {
        as: {
            type: [String, Object],
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
        rules: {
            type: [Object, String, Function],
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        validateOnBlur: {
            type: Boolean,
            default: undefined,
        },
        validateOnChange: {
            type: Boolean,
            default: undefined,
        },
        validateOnInput: {
            type: Boolean,
            default: undefined,
        },
        validateOnModelUpdate: {
            type: Boolean,
            default: undefined,
        },
        bails: {
            type: Boolean,
            default: () => getConfig().bails,
        },
        label: {
            type: String,
            default: undefined,
        },
        uncheckedValue: {
            type: null,
            default: undefined,
        },
        modelValue: {
            type: null,
            default: IS_ABSENT,
        },
        modelModifiers: {
            type: null,
            default: () => ({}),
        },
        'onUpdate:modelValue': {
            type: null,
            default: undefined,
        },
        standalone: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx) {
        const rules = __vite_ssr_import_0__.toRef(props, 'rules');
        const name = __vite_ssr_import_0__.toRef(props, 'name');
        const label = __vite_ssr_import_0__.toRef(props, 'label');
        const uncheckedValue = __vite_ssr_import_0__.toRef(props, 'uncheckedValue');
        const hasModelEvents = isPropPresent(props, 'onUpdate:modelValue');
        const { errors, value, errorMessage, validate: validateField, handleChange, handleBlur, setTouched, resetField, handleReset, meta, checked, setErrors, } = useField(name, rules, {
            validateOnMount: props.validateOnMount,
            bails: props.bails,
            standalone: props.standalone,
            type: ctx.attrs.type,
            initialValue: resolveInitialValue(props, ctx),
            // Only for checkboxes and radio buttons
            checkedValue: ctx.attrs.value,
            uncheckedValue,
            label,
            validateOnValueUpdate: false,
        });
        // If there is a v-model applied on the component we need to emit the `update:modelValue` whenever the value binding changes
        const onChangeHandler = hasModelEvents
            ? function handleChangeWithModel(e, shouldValidate = true) {
                handleChange(e, shouldValidate);
                ctx.emit('update:modelValue', value.value);
            }
            : handleChange;
        const handleInput = (e) => {
            if (!hasCheckedAttr(ctx.attrs.type)) {
                value.value = normalizeEventValue(e);
            }
        };
        const onInputHandler = hasModelEvents
            ? function handleInputWithModel(e) {
                handleInput(e);
                ctx.emit('update:modelValue', value.value);
            }
            : handleInput;
        const fieldProps = __vite_ssr_import_0__.computed(() => {
            const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = resolveValidationTriggers(props);
            const baseOnBlur = [handleBlur, ctx.attrs.onBlur, validateOnBlur ? validateField : undefined].filter(Boolean);
            const baseOnInput = [(e) => onChangeHandler(e, validateOnInput), ctx.attrs.onInput].filter(Boolean);
            const baseOnChange = [(e) => onChangeHandler(e, validateOnChange), ctx.attrs.onChange].filter(Boolean);
            const attrs = {
                name: props.name,
                onBlur: baseOnBlur,
                onInput: baseOnInput,
                onChange: baseOnChange,
            };
            attrs['onUpdate:modelValue'] = e => onChangeHandler(e, validateOnModelUpdate);
            if (hasCheckedAttr(ctx.attrs.type) && checked) {
                attrs.checked = checked.value;
            }
            else {
                attrs.value = value.value;
            }
            const tag = resolveTag(props, ctx);
            if (shouldHaveValueBinding(tag, ctx.attrs)) {
                delete attrs.value;
            }
            return attrs;
        });
        const modelValue = __vite_ssr_import_0__.toRef(props, 'modelValue');
        __vite_ssr_import_0__.watch(modelValue, newModelValue => {
            // Don't attempt to sync absent values
            if (newModelValue === IS_ABSENT && value.value === undefined) {
                return;
            }
            if (newModelValue !== applyModifiers(value.value, props.modelModifiers)) {
                value.value = newModelValue === IS_ABSENT ? undefined : newModelValue;
                validateField();
            }
        });
        function slotProps() {
            return {
                field: fieldProps.value,
                value: value.value,
                meta,
                errors: errors.value,
                errorMessage: errorMessage.value,
                validate: validateField,
                resetField,
                handleChange: onChangeHandler,
                handleInput: onInputHandler,
                handleReset,
                handleBlur,
                setTouched,
                setErrors,
            };
        }
        ctx.expose({
            setErrors,
            setTouched,
            reset: resetField,
            validate: validateField,
            handleChange,
        });
        return () => {
            const tag = __vite_ssr_import_0__.resolveDynamicComponent(resolveTag(props, ctx));
            const children = normalizeChildren(tag, ctx, slotProps);
            if (tag) {
                return __vite_ssr_import_0__.h(tag, Object.assign(Object.assign({}, ctx.attrs), fieldProps.value), children);
            }
            return children;
        };
    },
});
function resolveTag(props, ctx) {
    let tag = props.as || '';
    if (!props.as && !ctx.slots.default) {
        tag = 'input';
    }
    return tag;
}
function resolveValidationTriggers(props) {
    var _a, _b, _c, _d;
    const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = getConfig();
    return {
        validateOnInput: (_a = props.validateOnInput) !== null && _a !== void 0 ? _a : validateOnInput,
        validateOnChange: (_b = props.validateOnChange) !== null && _b !== void 0 ? _b : validateOnChange,
        validateOnBlur: (_c = props.validateOnBlur) !== null && _c !== void 0 ? _c : validateOnBlur,
        validateOnModelUpdate: (_d = props.validateOnModelUpdate) !== null && _d !== void 0 ? _d : validateOnModelUpdate,
    };
}
function applyModifiers(value, modifiers) {
    if (modifiers.number) {
        return toNumber(value);
    }
    return value;
}
function resolveInitialValue(props, ctx) {
    // Gets the initial value either from `value` prop/attr or `v-model` binding (modelValue)
    // For checkboxes and radio buttons it will always be the model value not the `value` attribute
    if (!hasCheckedAttr(ctx.attrs.type)) {
        return isPropPresent(props, 'modelValue') ? props.modelValue : ctx.attrs.value;
    }
    return isPropPresent(props, 'modelValue') ? props.modelValue : undefined;
}
const Field = FieldImpl;

let FORM_COUNTER = 0;
function useForm(opts) {
    const formId = FORM_COUNTER++;
    // Prevents fields from double resetting their values, which causes checkboxes to toggle their initial value
    // TODO: This won't be needed if we centralize all the state inside the `form` for form inputs
    let RESET_LOCK = false;
    // A lookup containing fields or field groups
    const fieldsByPath = __vite_ssr_import_0__.ref({});
    // If the form is currently submitting
    const isSubmitting = __vite_ssr_import_0__.ref(false);
    // The number of times the user tried to submit the form
    const submitCount = __vite_ssr_import_0__.ref(0);
    // dictionary for field arrays to receive various signals like reset
    const fieldArraysLookup = {};
    // a private ref for all form values
    const formValues = __vite_ssr_import_0__.reactive(klona(__vite_ssr_import_0__.unref(opts === null || opts === void 0 ? void 0 : opts.initialValues) || {}));
    // the source of errors for the form fields
    const { errorBag, setErrorBag, setFieldErrorBag } = useErrorBag(opts === null || opts === void 0 ? void 0 : opts.initialErrors);
    // Gets the first error of each field
    const errors = __vite_ssr_import_0__.computed(() => {
        return keysOf(errorBag.value).reduce((acc, key) => {
            const bag = errorBag.value[key];
            if (bag && bag.length) {
                acc[key] = bag[0];
            }
            return acc;
        }, {});
    });
    function getFirstFieldAtPath(path) {
        const fieldOrGroup = fieldsByPath.value[path];
        return Array.isArray(fieldOrGroup) ? fieldOrGroup[0] : fieldOrGroup;
    }
    function fieldExists(path) {
        return !!fieldsByPath.value[path];
    }
    /**
     * Holds a computed reference to all fields names and labels
     */
    const fieldNames = __vite_ssr_import_0__.computed(() => {
        return keysOf(fieldsByPath.value).reduce((names, path) => {
            const field = getFirstFieldAtPath(path);
            if (field) {
                names[path] = __vite_ssr_import_0__.unref(field.label || field.name) || '';
            }
            return names;
        }, {});
    });
    const fieldBailsMap = __vite_ssr_import_0__.computed(() => {
        return keysOf(fieldsByPath.value).reduce((map, path) => {
            var _a;
            const field = getFirstFieldAtPath(path);
            if (field) {
                map[path] = (_a = field.bails) !== null && _a !== void 0 ? _a : true;
            }
            return map;
        }, {});
    });
    // mutable non-reactive reference to initial errors
    // we need this to process initial errors then unset them
    const initialErrors = Object.assign({}, ((opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {}));
    // initial form values
    const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(fieldsByPath, formValues, opts === null || opts === void 0 ? void 0 : opts.initialValues);
    // form meta aggregations
    const meta = useFormMeta(fieldsByPath, formValues, initialValues, errors);
    const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
    const formCtx = {
        formId,
        fieldsByPath,
        values: formValues,
        errorBag,
        errors,
        schema,
        submitCount,
        meta,
        isSubmitting,
        fieldArraysLookup,
        validateSchema: __vite_ssr_import_0__.unref(schema) ? validateSchema : undefined,
        validate,
        register: registerField,
        unregister: unregisterField,
        setFieldErrorBag,
        validateField,
        setFieldValue,
        setValues,
        setErrors,
        setFieldError,
        setFieldTouched,
        setTouched,
        resetForm,
        handleSubmit,
        stageInitialValue,
        unsetInitialValue,
        setFieldInitialValue,
    };
    function isFieldGroup(fieldOrGroup) {
        return Array.isArray(fieldOrGroup);
    }
    function applyFieldMutation(fieldOrGroup, mutation) {
        if (Array.isArray(fieldOrGroup)) {
            return fieldOrGroup.forEach(mutation);
        }
        return mutation(fieldOrGroup);
    }
    function mutateAllFields(mutation) {
        Object.values(fieldsByPath.value).forEach(field => {
            if (!field) {
                return;
            }
            // avoid resetting the field values, because they should've been reset already.
            applyFieldMutation(field, mutation);
        });
    }
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldError(field, message) {
        setFieldErrorBag(field, message);
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrors(fields) {
        setErrorBag(fields);
    }
    /**
     * Sets a single field value
     */
    function setFieldValue(field, value, { force } = { force: false }) {
        var _a;
        const fieldInstance = fieldsByPath.value[field];
        const clonedValue = klona(value);
        // field wasn't found, create a virtual field as a placeholder
        if (!fieldInstance) {
            setInPath(formValues, field, clonedValue);
            return;
        }
        if (isFieldGroup(fieldInstance) && ((_a = fieldInstance[0]) === null || _a === void 0 ? void 0 : _a.type) === 'checkbox' && !Array.isArray(value)) {
            // Multiple checkboxes, and only one of them got updated
            const newValue = klona(resolveNextCheckboxValue(getFromPath(formValues, field) || [], value, undefined));
            setInPath(formValues, field, newValue);
            return;
        }
        let newValue = value;
        // Single Checkbox: toggles the field value unless the field is being reset then force it
        if (!isFieldGroup(fieldInstance) && fieldInstance.type === 'checkbox' && !force && !RESET_LOCK) {
            newValue = klona(resolveNextCheckboxValue(getFromPath(formValues, field), value, __vite_ssr_import_0__.unref(fieldInstance.uncheckedValue)));
        }
        setInPath(formValues, field, newValue);
    }
    /**
     * Sets multiple fields values
     */
    function setValues(fields) {
        // clean up old values
        keysOf(formValues).forEach(key => {
            delete formValues[key];
        });
        // set up new values
        keysOf(fields).forEach(path => {
            setFieldValue(path, fields[path]);
        });
        // regenerate the arrays when the form values change
        Object.values(fieldArraysLookup).forEach(f => f && f.reset());
    }
    /**
     * Sets the touched meta state on a field
     */
    function setFieldTouched(field, isTouched) {
        const fieldInstance = fieldsByPath.value[field];
        if (fieldInstance) {
            applyFieldMutation(fieldInstance, f => f.setTouched(isTouched));
        }
    }
    /**
     * Sets the touched meta state on multiple fields
     */
    function setTouched(fields) {
        keysOf(fields).forEach(field => {
            setFieldTouched(field, !!fields[field]);
        });
    }
    /**
     * Resets all fields
     */
    function resetForm(state) {
        RESET_LOCK = true;
        // set initial values if provided
        if (state === null || state === void 0 ? void 0 : state.values) {
            setInitialValues(state.values);
            setValues(state === null || state === void 0 ? void 0 : state.values);
        }
        else {
            // clean up the initial values back to the original
            setInitialValues(originalInitialValues.value);
            // otherwise clean the current values
            setValues(originalInitialValues.value);
        }
        // avoid resetting the field values, because they should've been reset already.
        mutateAllFields(f => f.resetField());
        if (state === null || state === void 0 ? void 0 : state.touched) {
            setTouched(state.touched);
        }
        setErrors((state === null || state === void 0 ? void 0 : state.errors) || {});
        submitCount.value = (state === null || state === void 0 ? void 0 : state.submitCount) || 0;
        __vite_ssr_import_0__.nextTick(() => {
            RESET_LOCK = false;
        });
    }
    function insertFieldAtPath(field, path) {
        const rawField = __vite_ssr_import_0__.markRaw(field);
        const fieldPath = path;
        // first field at that path
        if (!fieldsByPath.value[fieldPath]) {
            fieldsByPath.value[fieldPath] = rawField;
            return;
        }
        const fieldAtPath = fieldsByPath.value[fieldPath];
        if (fieldAtPath && !Array.isArray(fieldAtPath)) {
            fieldsByPath.value[fieldPath] = [fieldAtPath];
        }
        // add the new array to that path
        fieldsByPath.value[fieldPath] = [...fieldsByPath.value[fieldPath], rawField];
    }
    function removeFieldFromPath(field, path) {
        const fieldPath = path;
        const fieldAtPath = fieldsByPath.value[fieldPath];
        if (!fieldAtPath) {
            return;
        }
        // same field at path
        if (!isFieldGroup(fieldAtPath) && field.id === fieldAtPath.id) {
            delete fieldsByPath.value[fieldPath];
            return;
        }
        if (isFieldGroup(fieldAtPath)) {
            const idx = fieldAtPath.findIndex(f => f.id === field.id);
            if (idx === -1) {
                return;
            }
            fieldAtPath.splice(idx, 1);
            if (fieldAtPath.length === 1) {
                fieldsByPath.value[fieldPath] = fieldAtPath[0];
                return;
            }
            if (!fieldAtPath.length) {
                delete fieldsByPath.value[fieldPath];
            }
        }
    }
    function registerField(field) {
        const fieldPath = __vite_ssr_import_0__.unref(field.name);
        insertFieldAtPath(field, fieldPath);
        if (__vite_ssr_import_0__.isRef(field.name)) {
            // ensures when a field's name was already taken that it preserves its same value
            // necessary for fields generated by loops
            __vite_ssr_import_0__.watch(field.name, async (newPath, oldPath) => {
                // cache the value
                await __vite_ssr_import_0__.nextTick();
                removeFieldFromPath(field, oldPath);
                insertFieldAtPath(field, newPath);
                // re-validate if either path had errors before
                if (errors.value[oldPath] || errors.value[newPath]) {
                    // clear up both paths errors
                    setFieldError(oldPath, undefined);
                    validateField(newPath);
                }
                // clean up the old path if no other field is sharing that name
                // #3325
                await __vite_ssr_import_0__.nextTick();
                if (!fieldExists(oldPath)) {
                    unsetPath(formValues, oldPath);
                }
            });
        }
        // if field already had errors (initial errors) that's not user-set, validate it again to ensure state is correct
        // the difference being that `initialErrors` will contain the error message while other errors (pre-validated schema) won't have them as initial errors
        // #3342
        const initialErrorMessage = __vite_ssr_import_0__.unref(field.errorMessage);
        if (initialErrorMessage && (initialErrors === null || initialErrors === void 0 ? void 0 : initialErrors[fieldPath]) !== initialErrorMessage) {
            validateField(fieldPath);
        }
        // marks the initial error as "consumed" so it won't be matched later with same non-initial error
        delete initialErrors[fieldPath];
    }
    function unregisterField(field) {
        const fieldName = __vite_ssr_import_0__.unref(field.name);
        removeFieldFromPath(field, fieldName);
        __vite_ssr_import_0__.nextTick(() => {
            // clears a field error on unmounted
            // we wait till next tick to make sure if the field is completely removed and doesn't have any siblings like checkboxes
            // #3384
            if (!fieldExists(fieldName)) {
                setFieldError(fieldName, undefined);
                unsetPath(formValues, fieldName);
            }
        });
    }
    async function validate(opts) {
        mutateAllFields(f => (f.meta.validated = true));
        if (formCtx.validateSchema) {
            return formCtx.validateSchema((opts === null || opts === void 0 ? void 0 : opts.mode) || 'force');
        }
        // No schema, each field is responsible to validate itself
        const validations = await Promise.all(Object.values(fieldsByPath.value).map(field => {
            const fieldInstance = Array.isArray(field) ? field[0] : field;
            if (!fieldInstance) {
                return Promise.resolve({ key: '', valid: true, errors: [] });
            }
            return fieldInstance.validate(opts).then((result) => {
                return {
                    key: __vite_ssr_import_0__.unref(fieldInstance.name),
                    valid: result.valid,
                    errors: result.errors,
                };
            });
        }));
        const results = {};
        const errors = {};
        for (const validation of validations) {
            results[validation.key] = {
                valid: validation.valid,
                errors: validation.errors,
            };
            if (validation.errors.length) {
                errors[validation.key] = validation.errors[0];
            }
        }
        return {
            valid: validations.every(r => r.valid),
            results,
            errors,
        };
    }
    async function validateField(field) {
        const fieldInstance = fieldsByPath.value[field];
        if (!fieldInstance) {
            __vite_ssr_import_0__.warn(`field with name ${field} was not found`);
            return Promise.resolve({ errors: [], valid: true });
        }
        if (Array.isArray(fieldInstance)) {
            return fieldInstance.map(f => f.validate())[0];
        }
        return fieldInstance.validate();
    }
    function handleSubmit(fn, onValidationError) {
        return function submissionHandler(e) {
            if (e instanceof Event) {
                e.preventDefault();
                e.stopPropagation();
            }
            // Touch all fields
            setTouched(keysOf(fieldsByPath.value).reduce((acc, field) => {
                acc[field] = true;
                return acc;
            }, {}));
            isSubmitting.value = true;
            submitCount.value++;
            return validate()
                .then(result => {
                if (result.valid && typeof fn === 'function') {
                    return fn(klona(formValues), {
                        evt: e,
                        setErrors,
                        setFieldError,
                        setTouched,
                        setFieldTouched,
                        setValues,
                        setFieldValue,
                        resetForm,
                    });
                }
                if (!result.valid && typeof onValidationError === 'function') {
                    onValidationError({
                        values: klona(formValues),
                        evt: e,
                        errors: result.errors,
                        results: result.results,
                    });
                }
            })
                .then(returnVal => {
                isSubmitting.value = false;
                return returnVal;
            }, err => {
                isSubmitting.value = false;
                // re-throw the err so it doesn't go silent
                throw err;
            });
        };
    }
    function setFieldInitialValue(path, value) {
        setInPath(initialValues.value, path, klona(value));
    }
    function unsetInitialValue(path) {
        unsetPath(initialValues.value, path);
    }
    /**
     * Sneaky function to set initial field values
     */
    function stageInitialValue(path, value) {
        setInPath(formValues, path, value);
        setFieldInitialValue(path, value);
    }
    async function _validateSchema() {
        const schemaValue = __vite_ssr_import_0__.unref(schema);
        if (!schemaValue) {
            return { valid: true, results: {}, errors: {} };
        }
        const formResult = isYupValidator(schemaValue)
            ? await validateYupSchema(schemaValue, formValues)
            : await validateObjectSchema(schemaValue, formValues, {
                names: fieldNames.value,
                bailsMap: fieldBailsMap.value,
            });
        return formResult;
    }
    /**
     * Batches validation runs in 5ms batches
     */
    const debouncedSchemaValidation = debounceAsync(_validateSchema, 5);
    async function validateSchema(mode) {
        const formResult = await debouncedSchemaValidation();
        // fields by id lookup
        const fieldsById = formCtx.fieldsByPath.value || {};
        // errors fields names, we need it to also check if custom errors are updated
        const currentErrorsPaths = keysOf(formCtx.errorBag.value);
        // collect all the keys from the schema and all fields
        // this ensures we have a complete keymap of all the fields
        const paths = [
            ...new Set([...keysOf(formResult.results), ...keysOf(fieldsById), ...currentErrorsPaths]),
        ];
        // aggregates the paths into a single result object while applying the results on the fields
        return paths.reduce((validation, path) => {
            const field = fieldsById[path];
            const messages = (formResult.results[path] || { errors: [] }).errors;
            const fieldResult = {
                errors: messages,
                valid: !messages.length,
            };
            validation.results[path] = fieldResult;
            if (!fieldResult.valid) {
                validation.errors[path] = fieldResult.errors[0];
            }
            // field not rendered
            if (!field) {
                setFieldError(path, messages);
                return validation;
            }
            // always update the valid flag regardless of the mode
            applyFieldMutation(field, f => (f.meta.valid = fieldResult.valid));
            if (mode === 'silent') {
                return validation;
            }
            const wasValidated = Array.isArray(field) ? field.some(f => f.meta.validated) : field.meta.validated;
            if (mode === 'validated-only' && !wasValidated) {
                return validation;
            }
            applyFieldMutation(field, f => f.setState({ errors: fieldResult.errors }));
            return validation;
        }, { valid: formResult.valid, results: {}, errors: {} });
    }
    const submitForm = handleSubmit((_, { evt }) => {
        if (isFormSubmitEvent(evt)) {
            evt.target.submit();
        }
    });
    // Trigger initial validation
    __vite_ssr_import_0__.onMounted(() => {
        if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
            setErrors(opts.initialErrors);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
            setTouched(opts.initialTouched);
        }
        // if validate on mount was enabled
        if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
            validate();
            return;
        }
        // otherwise run initial silent validation through schema if available
        // the useField should skip their own silent validation if a yup schema is present
        if (formCtx.validateSchema) {
            formCtx.validateSchema('silent');
        }
    });
    if (__vite_ssr_import_0__.isRef(schema)) {
        __vite_ssr_import_0__.watch(schema, () => {
            var _a;
            (_a = formCtx.validateSchema) === null || _a === void 0 ? void 0 : _a.call(formCtx, 'validated-only');
        });
    }
    // Provide injections
    __vite_ssr_import_0__.provide(FormContextKey, formCtx);
    if ((process.env.NODE_ENV !== 'production')) {
        registerFormWithDevTools(formCtx);
        __vite_ssr_import_0__.watch(() => (Object.assign(Object.assign({ errors: errorBag.value }, meta.value), { values: formValues, isSubmitting: isSubmitting.value, submitCount: submitCount.value })), refreshInspector, {
            deep: true,
        });
    }
    return {
        errors,
        meta,
        values: formValues,
        isSubmitting,
        submitCount,
        validate,
        validateField,
        handleReset: () => resetForm(),
        resetForm,
        handleSubmit,
        submitForm,
        setFieldError,
        setErrors,
        setFieldValue,
        setValues,
        setFieldTouched,
        setTouched,
    };
}
/**
 * Manages form meta aggregation
 */
function useFormMeta(fieldsByPath, currentValues, initialValues, errors) {
    const MERGE_STRATEGIES = {
        touched: 'some',
        pending: 'some',
        valid: 'every',
    };
    const isDirty = __vite_ssr_import_0__.computed(() => {
        return !es6(currentValues, __vite_ssr_import_0__.unref(initialValues));
    });
    function calculateFlags() {
        const fields = Object.values(fieldsByPath.value).flat(1).filter(Boolean);
        return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
            const mergeMethod = MERGE_STRATEGIES[flag];
            acc[flag] = fields[mergeMethod](field => field.meta[flag]);
            return acc;
        }, {});
    }
    const flags = __vite_ssr_import_0__.reactive(calculateFlags());
    __vite_ssr_import_0__.watchEffect(() => {
        const value = calculateFlags();
        flags.touched = value.touched;
        flags.valid = value.valid;
        flags.pending = value.pending;
    });
    return __vite_ssr_import_0__.computed(() => {
        return Object.assign(Object.assign({ initialValues: __vite_ssr_import_0__.unref(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
    });
}
/**
 * Manages the initial values prop
 */
function useFormInitialValues(fields, formValues, providedValues) {
    // these are the mutable initial values as the fields are mounted/unmounted
    const initialValues = __vite_ssr_import_0__.ref(klona(__vite_ssr_import_0__.unref(providedValues)) || {});
    // these are the original initial value as provided by the user initially, they don't keep track of conditional fields
    // this is important because some conditional fields will overwrite the initial values for other fields who had the same name
    // like array fields, any push/insert operation will overwrite the initial values because they "create new fields"
    // so these are the values that the reset function should use
    // these only change when the user explicitly chanegs the initial values or when the user resets them with new values.
    const originalInitialValues = __vite_ssr_import_0__.ref(klona(__vite_ssr_import_0__.unref(providedValues)) || {});
    function setInitialValues(values, updateFields = false) {
        initialValues.value = klona(values);
        originalInitialValues.value = klona(values);
        if (!updateFields) {
            return;
        }
        // update the pristine non-touched fields
        // those are excluded because it's unlikely you want to change the form values using initial values
        // we mostly watch them for API population or newly inserted fields
        // if the user API is taking too much time before user interaction they should consider disabling or hiding their inputs until the values are ready
        keysOf(fields.value).forEach(fieldPath => {
            const field = fields.value[fieldPath];
            const wasTouched = Array.isArray(field) ? field.some(f => f.meta.touched) : field === null || field === void 0 ? void 0 : field.meta.touched;
            if (!field || wasTouched) {
                return;
            }
            const newValue = getFromPath(initialValues.value, fieldPath);
            setInPath(formValues, fieldPath, klona(newValue));
        });
    }
    if (__vite_ssr_import_0__.isRef(providedValues)) {
        __vite_ssr_import_0__.watch(providedValues, value => {
            setInitialValues(value, true);
        }, {
            deep: true,
        });
    }
    return {
        initialValues,
        originalInitialValues,
        setInitialValues,
    };
}
function useErrorBag(initialErrors) {
    const errorBag = __vite_ssr_import_0__.ref({});
    function normalizeErrorItem(message) {
        return Array.isArray(message) ? message : message ? [message] : [];
    }
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldErrorBag(field, message) {
        if (!message) {
            delete errorBag.value[field];
            return;
        }
        errorBag.value[field] = normalizeErrorItem(message);
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrorBag(fields) {
        errorBag.value = keysOf(fields).reduce((acc, key) => {
            const message = fields[key];
            if (message) {
                acc[key] = normalizeErrorItem(message);
            }
            return acc;
        }, {});
    }
    if (initialErrors) {
        setErrorBag(initialErrors);
    }
    return {
        errorBag,
        setErrorBag,
        setFieldErrorBag,
    };
}

const FormImpl = __vite_ssr_import_0__.defineComponent({
    name: 'Form',
    inheritAttrs: false,
    props: {
        as: {
            type: String,
            default: 'form',
        },
        validationSchema: {
            type: Object,
            default: undefined,
        },
        initialValues: {
            type: Object,
            default: undefined,
        },
        initialErrors: {
            type: Object,
            default: undefined,
        },
        initialTouched: {
            type: Object,
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        onSubmit: {
            type: Function,
            default: undefined,
        },
        onInvalidSubmit: {
            type: Function,
            default: undefined,
        },
    },
    setup(props, ctx) {
        const initialValues = __vite_ssr_import_0__.toRef(props, 'initialValues');
        const validationSchema = __vite_ssr_import_0__.toRef(props, 'validationSchema');
        const { errors, values, meta, isSubmitting, submitCount, validate, validateField, handleReset, resetForm, handleSubmit, submitForm, setErrors, setFieldError, setFieldValue, setValues, setFieldTouched, setTouched, } = useForm({
            validationSchema: validationSchema.value ? validationSchema : undefined,
            initialValues,
            initialErrors: props.initialErrors,
            initialTouched: props.initialTouched,
            validateOnMount: props.validateOnMount,
        });
        const onSubmit = props.onSubmit ? handleSubmit(props.onSubmit, props.onInvalidSubmit) : submitForm;
        function handleFormReset(e) {
            if (isEvent(e)) {
                // Prevent default form reset behavior
                e.preventDefault();
            }
            handleReset();
            if (typeof ctx.attrs.onReset === 'function') {
                ctx.attrs.onReset();
            }
        }
        function handleScopedSlotSubmit(evt, onSubmit) {
            const onSuccess = typeof evt === 'function' && !onSubmit ? evt : onSubmit;
            return handleSubmit(onSuccess, props.onInvalidSubmit)(evt);
        }
        function slotProps() {
            return {
                meta: meta.value,
                errors: errors.value,
                values: values,
                isSubmitting: isSubmitting.value,
                submitCount: submitCount.value,
                validate,
                validateField,
                handleSubmit: handleScopedSlotSubmit,
                handleReset,
                submitForm,
                setErrors,
                setFieldError,
                setFieldValue,
                setValues,
                setFieldTouched,
                setTouched,
                resetForm,
            };
        }
        // expose these functions and methods as part of public API
        ctx.expose({
            setFieldError,
            setErrors,
            setFieldValue,
            setValues,
            setFieldTouched,
            setTouched,
            resetForm,
            validate,
            validateField,
        });
        return function renderForm() {
            // avoid resolving the form component as itself
            const tag = props.as === 'form' ? props.as : __vite_ssr_import_0__.resolveDynamicComponent(props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            if (!props.as) {
                return children;
            }
            // Attributes to add on a native `form` tag
            const formAttrs = props.as === 'form'
                ? {
                    // Disables native validation as vee-validate will handle it.
                    novalidate: true,
                }
                : {};
            return __vite_ssr_import_0__.h(tag, Object.assign(Object.assign(Object.assign({}, formAttrs), ctx.attrs), { onSubmit, onReset: handleFormReset }), children);
        };
    },
});
const Form = FormImpl;

let FIELD_ARRAY_COUNTER = 0;
function useFieldArray(arrayPath) {
    const id = FIELD_ARRAY_COUNTER++;
    const form = injectWithSelf(FormContextKey, undefined);
    const fields = __vite_ssr_import_0__.ref([]);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const noOp = () => { };
    const noOpApi = {
        fields: __vite_ssr_import_0__.readonly(fields),
        remove: noOp,
        push: noOp,
        swap: noOp,
        insert: noOp,
        update: noOp,
        replace: noOp,
        prepend: noOp,
    };
    if (!form) {
        warn('FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly');
        return noOpApi;
    }
    if (!__vite_ssr_import_0__.unref(arrayPath)) {
        warn('FieldArray requires a field path to be provided, did you forget to pass the `name` prop?');
        return noOpApi;
    }
    let entryCounter = 0;
    function initFields() {
        const currentValues = getFromPath(form === null || form === void 0 ? void 0 : form.values, __vite_ssr_import_0__.unref(arrayPath), []);
        fields.value = currentValues.map(createEntry);
        updateEntryFlags();
    }
    initFields();
    function updateEntryFlags() {
        const fieldsLength = fields.value.length;
        for (let i = 0; i < fieldsLength; i++) {
            const entry = fields.value[i];
            entry.isFirst = i === 0;
            entry.isLast = i === fieldsLength - 1;
        }
    }
    function createEntry(value) {
        const key = entryCounter++;
        const entry = {
            key,
            value: __vite_ssr_import_0__.computed(() => {
                const currentValues = getFromPath(form === null || form === void 0 ? void 0 : form.values, __vite_ssr_import_0__.unref(arrayPath), []);
                const idx = fields.value.findIndex(e => e.key === key);
                return idx === -1 ? value : currentValues[idx];
            }),
            isFirst: false,
            isLast: false,
        };
        return entry;
    }
    function remove(idx) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!pathValue || !Array.isArray(pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        newValue.splice(idx, 1);
        form === null || form === void 0 ? void 0 : form.unsetInitialValue(pathName + `[${idx}]`);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.splice(idx, 1);
        updateEntryFlags();
    }
    function push(value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [...normalizedPathValue];
        newValue.push(value);
        form === null || form === void 0 ? void 0 : form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.push(createEntry(value));
        updateEntryFlags();
    }
    function swap(indexA, indexB) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || !(indexA in pathValue) || !(indexB in pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        // the old switcheroo
        const temp = newValue[indexA];
        newValue[indexA] = newValue[indexB];
        newValue[indexB] = temp;
        const tempEntry = newFields[indexA];
        newFields[indexA] = newFields[indexB];
        newFields[indexB] = tempEntry;
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    function insert(idx, value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length < idx) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        newValue.splice(idx, 0, value);
        newFields.splice(idx, 0, createEntry(value));
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    function replace(arr) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, arr);
        initFields();
    }
    function update(idx, value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length - 1 < idx) {
            return;
        }
        form === null || form === void 0 ? void 0 : form.setFieldValue(`${pathName}[${idx}]`, value);
    }
    function prepend(value) {
        const pathName = __vite_ssr_import_0__.unref(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [value, ...normalizedPathValue];
        form === null || form === void 0 ? void 0 : form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.unshift(createEntry(value));
        updateEntryFlags();
    }
    form.fieldArraysLookup[id] = {
        reset: initFields,
    };
    __vite_ssr_import_0__.onBeforeUnmount(() => {
        delete form.fieldArraysLookup[id];
    });
    return {
        fields: __vite_ssr_import_0__.readonly(fields),
        remove,
        push,
        swap,
        insert,
        update,
        replace,
        prepend,
    };
}

const FieldArrayImpl = __vite_ssr_import_0__.defineComponent({
    name: 'FieldArray',
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const { push, remove, swap, insert, replace, update, prepend, fields } = useFieldArray(__vite_ssr_import_0__.toRef(props, 'name'));
        function slotProps() {
            return {
                fields: fields.value,
                push,
                remove,
                swap,
                insert,
                update,
                replace,
                prepend,
            };
        }
        ctx.expose({
            push,
            remove,
            swap,
            insert,
            update,
            replace,
            prepend,
        });
        return () => {
            const children = normalizeChildren(undefined, ctx, slotProps);
            return children;
        };
    },
});
const FieldArray = FieldArrayImpl;

const ErrorMessageImpl = __vite_ssr_import_0__.defineComponent({
    name: 'ErrorMessage',
    props: {
        as: {
            type: String,
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const form = __vite_ssr_import_0__.inject(FormContextKey, undefined);
        const message = __vite_ssr_import_0__.computed(() => {
            return form === null || form === void 0 ? void 0 : form.errors.value[props.name];
        });
        function slotProps() {
            return {
                message: message.value,
            };
        }
        return () => {
            // Renders nothing if there are no messages
            if (!message.value) {
                return undefined;
            }
            const tag = (props.as ? __vite_ssr_import_0__.resolveDynamicComponent(props.as) : props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            const attrs = Object.assign({ role: 'alert' }, ctx.attrs);
            // If no tag was specified and there are children
            // render the slot as is without wrapping it
            if (!tag && (Array.isArray(children) || !children) && (children === null || children === void 0 ? void 0 : children.length)) {
                return children;
            }
            // If no children in slot
            // render whatever specified and fallback to a <span> with the message in it's contents
            if ((Array.isArray(children) || !children) && !(children === null || children === void 0 ? void 0 : children.length)) {
                return __vite_ssr_import_0__.h(tag || 'span', attrs, message.value);
            }
            return __vite_ssr_import_0__.h(tag, attrs, children);
        };
    },
});
const ErrorMessage = ErrorMessageImpl;

function useResetForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function resetForm(state) {
        if (!form) {
            return;
        }
        return form.resetForm(state);
    };
}

/**
 * If a field is dirty or not
 */
function useIsFieldDirty(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return false;
        }
        return field.meta.dirty;
    });
}

/**
 * If a field is touched or not
 */
function useIsFieldTouched(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return false;
        }
        return field.meta.touched;
    });
}

/**
 * If a field is validated and is valid
 */
function useIsFieldValid(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return false;
        }
        return field.meta.valid;
    });
}

/**
 * If the form is submitting or not
 */
function useIsSubmitting() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.isSubmitting.value) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validates a single field
 */
function useValidateField(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return function validateField() {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[__vite_ssr_import_0__.unref(path)]);
        }
        if (!field) {
            warn(`field with name ${__vite_ssr_import_0__.unref(path)} was not found`);
            return Promise.resolve({
                errors: [],
                valid: true,
            });
        }
        return field.validate();
    };
}

/**
 * If the form is dirty or not
 */
function useIsFormDirty() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.dirty) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form is touched or not
 */
function useIsFormTouched() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.touched) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form has been validated and is valid
 */
function useIsFormValid() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.valid) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validate multiple fields
 */
function useValidateForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function validateField() {
        if (!form) {
            return Promise.resolve({ results: {}, errors: {}, valid: true });
        }
        return form.validate();
    };
}

/**
 * The number of form's submission count
 */
function useSubmitCount() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.submitCount.value) !== null && _a !== void 0 ? _a : 0;
    });
}

/**
 * Gives access to a field's current value
 */
function useFieldValue(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            return getFromPath(form === null || form === void 0 ? void 0 : form.values, __vite_ssr_import_0__.unref(path));
        }
        return __vite_ssr_import_0__.unref(field === null || field === void 0 ? void 0 : field.value);
    });
}

/**
 * Gives access to a form's values
 */
function useFormValues() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        return (form === null || form === void 0 ? void 0 : form.values) || {};
    });
}

/**
 * Gives access to all form errors
 */
function useFormErrors() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return __vite_ssr_import_0__.computed(() => {
        return ((form === null || form === void 0 ? void 0 : form.errors.value) || {});
    });
}

/**
 * Gives access to a single field error
 */
function useFieldError(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : __vite_ssr_import_0__.inject(FieldContextKey);
    return __vite_ssr_import_0__.computed(() => {
        if (path) {
            return form === null || form === void 0 ? void 0 : form.errors.value[__vite_ssr_import_0__.unref(path)];
        }
        return field === null || field === void 0 ? void 0 : field.errorMessage.value;
    });
}

function useSubmitForm(cb) {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    const onSubmit = form ? form.handleSubmit(cb) : undefined;
    return function submitForm(e) {
        if (!onSubmit) {
            return;
        }
        return onSubmit(e);
    };
}


Object.defineProperty(__vite_ssr_exports__, "ErrorMessage", { enumerable: true, configurable: true, get(){ return ErrorMessage }});
Object.defineProperty(__vite_ssr_exports__, "Field", { enumerable: true, configurable: true, get(){ return Field }});
Object.defineProperty(__vite_ssr_exports__, "FieldArray", { enumerable: true, configurable: true, get(){ return FieldArray }});
Object.defineProperty(__vite_ssr_exports__, "FieldContextKey", { enumerable: true, configurable: true, get(){ return FieldContextKey }});
Object.defineProperty(__vite_ssr_exports__, "Form", { enumerable: true, configurable: true, get(){ return Form }});
Object.defineProperty(__vite_ssr_exports__, "FormContextKey", { enumerable: true, configurable: true, get(){ return FormContextKey }});
Object.defineProperty(__vite_ssr_exports__, "configure", { enumerable: true, configurable: true, get(){ return configure }});
Object.defineProperty(__vite_ssr_exports__, "defineRule", { enumerable: true, configurable: true, get(){ return defineRule }});
Object.defineProperty(__vite_ssr_exports__, "useField", { enumerable: true, configurable: true, get(){ return useField }});
Object.defineProperty(__vite_ssr_exports__, "useFieldArray", { enumerable: true, configurable: true, get(){ return useFieldArray }});
Object.defineProperty(__vite_ssr_exports__, "useFieldError", { enumerable: true, configurable: true, get(){ return useFieldError }});
Object.defineProperty(__vite_ssr_exports__, "useFieldValue", { enumerable: true, configurable: true, get(){ return useFieldValue }});
Object.defineProperty(__vite_ssr_exports__, "useForm", { enumerable: true, configurable: true, get(){ return useForm }});
Object.defineProperty(__vite_ssr_exports__, "useFormErrors", { enumerable: true, configurable: true, get(){ return useFormErrors }});
Object.defineProperty(__vite_ssr_exports__, "useFormValues", { enumerable: true, configurable: true, get(){ return useFormValues }});
Object.defineProperty(__vite_ssr_exports__, "useIsFieldDirty", { enumerable: true, configurable: true, get(){ return useIsFieldDirty }});
Object.defineProperty(__vite_ssr_exports__, "useIsFieldTouched", { enumerable: true, configurable: true, get(){ return useIsFieldTouched }});
Object.defineProperty(__vite_ssr_exports__, "useIsFieldValid", { enumerable: true, configurable: true, get(){ return useIsFieldValid }});
Object.defineProperty(__vite_ssr_exports__, "useIsFormDirty", { enumerable: true, configurable: true, get(){ return useIsFormDirty }});
Object.defineProperty(__vite_ssr_exports__, "useIsFormTouched", { enumerable: true, configurable: true, get(){ return useIsFormTouched }});
Object.defineProperty(__vite_ssr_exports__, "useIsFormValid", { enumerable: true, configurable: true, get(){ return useIsFormValid }});
Object.defineProperty(__vite_ssr_exports__, "useIsSubmitting", { enumerable: true, configurable: true, get(){ return useIsSubmitting }});
Object.defineProperty(__vite_ssr_exports__, "useResetForm", { enumerable: true, configurable: true, get(){ return useResetForm }});
Object.defineProperty(__vite_ssr_exports__, "useSubmitCount", { enumerable: true, configurable: true, get(){ return useSubmitCount }});
Object.defineProperty(__vite_ssr_exports__, "useSubmitForm", { enumerable: true, configurable: true, get(){ return useSubmitForm }});
Object.defineProperty(__vite_ssr_exports__, "useValidateField", { enumerable: true, configurable: true, get(){ return useValidateField }});
Object.defineProperty(__vite_ssr_exports__, "useValidateForm", { enumerable: true, configurable: true, get(){ return useValidateForm }});
Object.defineProperty(__vite_ssr_exports__, "validate", { enumerable: true, configurable: true, get(){ return validate }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/index.js
// Parents: 
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/env.js ($id_304a908e)
// - /node_modules/@vue/devtools-api/lib/esm/const.js ($id_8e00d2d1)
// - /node_modules/@vue/devtools-api/lib/esm/proxy.js ($id_c00b31f5)
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// - /node_modules/@vue/devtools-api/lib/esm/plugin.js ($id_674cbbbf)
// - /node_modules/@vue/devtools-api/lib/esm/time.js ($id_86120667)
// --------------------
const $id_24b1ff15 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/env.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/const.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/proxy.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/index.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/plugin.js");
__vite_ssr_exportAll__(__vite_ssr_import_4__);
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/time.js");
__vite_ssr_exportAll__(__vite_ssr_import_5__);
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = __vite_ssr_import_0__.getTarget();
    const hook = __vite_ssr_import_0__.getDevtoolsGlobalHook();
    const enableProxy = __vite_ssr_import_0__.isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(__vite_ssr_import_1__.HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new __vite_ssr_import_2__.ApiProxy(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            setupFn(proxy.proxiedTarget);
    }
}
Object.defineProperty(__vite_ssr_exports__, "setupDevtoolsPlugin", { enumerable: true, configurable: true, get(){ return setupDevtoolsPlugin }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/env.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 

// --------------------
const $id_304a908e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
Object.defineProperty(__vite_ssr_exports__, "getDevtoolsGlobalHook", { enumerable: true, configurable: true, get(){ return getDevtoolsGlobalHook }});
function getTarget() {
    // @ts-ignore
    return ("undefined" !== 'undefined' && "undefined" !== 'undefined')
        ? window
        : typeof global !== 'undefined'
            ? global
            : {};
}
Object.defineProperty(__vite_ssr_exports__, "getTarget", { enumerable: true, configurable: true, get(){ return getTarget }});
const isProxyAvailable = typeof Proxy === 'function';
Object.defineProperty(__vite_ssr_exports__, "isProxyAvailable", { enumerable: true, configurable: true, get(){ return isProxyAvailable }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/const.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// - /node_modules/@vue/devtools-api/lib/esm/proxy.js ($id_c00b31f5)
// Dependencies: 

// --------------------
const $id_8e00d2d1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const HOOK_SETUP = 'devtools-plugin:setup';
Object.defineProperty(__vite_ssr_exports__, "HOOK_SETUP", { enumerable: true, configurable: true, get(){ return HOOK_SETUP }});
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';
Object.defineProperty(__vite_ssr_exports__, "HOOK_PLUGIN_SETTINGS_SET", { enumerable: true, configurable: true, get(){ return HOOK_PLUGIN_SETTINGS_SET }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/proxy.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/const.js ($id_8e00d2d1)
// - /node_modules/@vue/devtools-api/lib/esm/time.js ($id_86120667)
// --------------------
const $id_c00b31f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/const.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/time.js");

class ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
            now() {
                return __vite_ssr_import_1__.now();
            },
        };
        if (hook) {
            hook.on(__vite_ssr_import_0__.HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                if (pluginId === this.plugin.id) {
                    this.fallbacks.setSettings(value);
                }
            });
        }
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}
Object.defineProperty(__vite_ssr_exports__, "ApiProxy", { enumerable: true, configurable: true, get(){ return ApiProxy }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/time.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/proxy.js ($id_c00b31f5)
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 

// --------------------
const $id_86120667 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
let supported;
let perf;
function isPerformanceSupported() {
    var _a;
    if (supported !== undefined) {
        return supported;
    }
    if ("undefined" !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else if (typeof global !== 'undefined' && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
        supported = true;
        perf = global.perf_hooks.performance;
    }
    else {
        supported = false;
    }
    return supported;
}
Object.defineProperty(__vite_ssr_exports__, "isPerformanceSupported", { enumerable: true, configurable: true, get(){ return isPerformanceSupported }});
function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
}
Object.defineProperty(__vite_ssr_exports__, "now", { enumerable: true, configurable: true, get(){ return now }});
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/index.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 
// - /node_modules/@vue/devtools-api/lib/esm/api/api.js ($id_92fae9b0)
// - /node_modules/@vue/devtools-api/lib/esm/api/app.js ($id_b65c5853)
// - /node_modules/@vue/devtools-api/lib/esm/api/component.js ($id_614015ea)
// - /node_modules/@vue/devtools-api/lib/esm/api/context.js ($id_2baadcfd)
// - /node_modules/@vue/devtools-api/lib/esm/api/hooks.js ($id_3aa5d48c)
// - /node_modules/@vue/devtools-api/lib/esm/api/util.js ($id_03011152)
// --------------------
const $id_550ae022 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/api.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/app.js");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/component.js");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/context.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/hooks.js");
__vite_ssr_exportAll__(__vite_ssr_import_4__);
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@vue/devtools-api/lib/esm/api/util.js");
__vite_ssr_exportAll__(__vite_ssr_import_5__);
;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/api.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_92fae9b0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/app.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_b65c5853 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/component.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_614015ea = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/context.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_2baadcfd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/hooks.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_3aa5d48c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/api/util.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/api/index.js ($id_550ae022)
// Dependencies: 

// --------------------
const $id_03011152 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /node_modules/@vue/devtools-api/lib/esm/plugin.js
// Parents: 
// - /node_modules/@vue/devtools-api/lib/esm/index.js ($id_24b1ff15)
// Dependencies: 

// --------------------
const $id_674cbbbf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

;
}


// --------------------
// Request: /pages/parent/validator.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/parent/validator.vue?macro=true ($id_9d3da6f7)
// - /pages/parent/validator.vue ($id_cd7804c4)
// Dependencies: 

// --------------------
const $id_7eb4630f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".root[data-v-4afeabb4]{width:100%}@media (min-width:640px){.root[data-v-4afeabb4]{max-width:640px}}@media (min-width:768px){.root[data-v-4afeabb4]{max-width:768px}}@media (min-width:1024px){.root[data-v-4afeabb4]{max-width:1024px}}@media (min-width:1280px){.root[data-v-4afeabb4]{max-width:1280px}}@media (min-width:1536px){.root[data-v-4afeabb4]{max-width:1536px}}.root[data-v-4afeabb4]{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity));font-family:Arial,Helvetica,sans-serif;margin:auto;max-width:56rem;text-align:center}.root h1[data-v-4afeabb4]{font-size:3rem;line-height:1}.root[data-v-4afeabb4]{border-radius:1rem;margin:6rem auto 0;padding:1.75rem;width:24rem}input[data-v-4afeabb4]{--tw-border-opacity:1;border-color:rgb(196 181 253/var(--tw-border-opacity));border-radius:.375rem;border-style:solid;border-width:0 0 2px;margin:10px 0 5px;outline-width:0;padding-bottom:.25rem;padding-left:1.25rem;padding-top:.25rem;width:99%}button[data-v-4afeabb4],input[data-v-4afeabb4]{font-size:1rem;line-height:1.5rem}button[data-v-4afeabb4]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:rgb(238 242 255/var(--tw-bg-opacity));border-radius:.5rem;border-style:none;box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);font-weight:200;margin:.25rem;outline-color:#ef4444;outline-style:solid;outline-width:.15px;padding:.5rem 1rem;width:12rem}button[data-v-4afeabb4]:hover{background-color:rgb(220 38 38/var(--tw-bg-opacity))}button[data-v-4afeabb4]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:rgb(248 113 113/var(--tw-ring-opacity));--tw-ring-opacity:0.75;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}button[data-v-4afeabb4],button[data-v-4afeabb4]:focus{outline:2px solid transparent;outline-offset:2px}button[data-v-4afeabb4]{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity));color:rgb(250 250 249/var(--tw-text-opacity))}button[data-v-4afeabb4]:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}";
}


// --------------------
// Request: /pages/quickstart.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/quickstart.vue?vue&type=style&index=0&scoped=true&lang.css ($id_7d315e21)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bcd290a0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required right now!';
};

const __returned__ = { isRequired }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VForm = __vite_ssr_import_0__.resolveComponent("VForm")
  const _component_VField = __vite_ssr_import_0__.resolveComponent("VField")
  const _component_VErrorMessage = __vite_ssr_import_0__.resolveComponent("VErrorMessage")

  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-screen flex justify-center" }, _attrs))} data-v-b8c39d64><div class="root bg-slate-200" data-v-b8c39d64><h2 class="title is-2 has-text-centered my-6" data-v-b8c39d64>VeeValidate Quickstart</h2>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_VForm, { class: "card p-6 has-background-light" }, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_1__.ssrRenderComponent(_component_VField, {
          name: "field",
          rules: $setup.isRequired,
          class: "input",
          placeholder: "Enter text"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_1__.ssrRenderComponent(_component_VErrorMessage, {
          name: "field",
          class: "help is-danger"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_0__.createVNode(_component_VField, {
            name: "field",
            rules: $setup.isRequired,
            class: "input",
            placeholder: "Enter text"
          }),
          __vite_ssr_import_0__.createVNode(_component_VErrorMessage, {
            name: "field",
            class: "help is-danger"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<button data-v-b8c39d64>submit</button></div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/quickstart.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/quickstart.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-b8c39d64"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/quickstart.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/quickstart.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/quickstart.vue?macro=true ($id_bcd290a0)
// - /pages/quickstart.vue ($id_bd2d66fd)
// Dependencies: 

// --------------------
const $id_7d315e21 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".root[data-v-b8c39d64]{width:100%}@media (min-width:640px){.root[data-v-b8c39d64]{max-width:640px}}@media (min-width:768px){.root[data-v-b8c39d64]{max-width:768px}}@media (min-width:1024px){.root[data-v-b8c39d64]{max-width:1024px}}@media (min-width:1280px){.root[data-v-b8c39d64]{max-width:1280px}}@media (min-width:1536px){.root[data-v-b8c39d64]{max-width:1536px}}.root[data-v-b8c39d64]{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity));font-family:Arial,Helvetica,sans-serif;margin:auto;max-width:56rem;text-align:center}.root h1[data-v-b8c39d64]{font-size:3rem;line-height:1}.root[data-v-b8c39d64]{border-radius:1rem;margin:6rem auto 0;padding:1.75rem;width:24rem}input[data-v-b8c39d64]{--tw-border-opacity:1;border-color:rgb(196 181 253/var(--tw-border-opacity));border-radius:.375rem;border-style:solid;border-width:0 0 2px;margin:10px 0 5px;outline-width:0;padding-bottom:.25rem;padding-left:1.25rem;padding-top:.25rem;width:99%}button[data-v-b8c39d64],input[data-v-b8c39d64]{font-size:1rem;line-height:1.5rem}button[data-v-b8c39d64]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:rgb(238 242 255/var(--tw-bg-opacity));border-radius:.5rem;border-style:none;box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);font-weight:200;margin:.25rem;outline-color:#ef4444;outline-style:solid;outline-width:.15px;padding:.5rem 1rem;width:12rem}button[data-v-b8c39d64]:hover{background-color:rgb(220 38 38/var(--tw-bg-opacity))}button[data-v-b8c39d64]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:rgb(248 113 113/var(--tw-ring-opacity));--tw-ring-opacity:0.75;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}button[data-v-b8c39d64],button[data-v-b8c39d64]:focus{outline:2px solid transparent;outline-offset:2px}button[data-v-b8c39d64]{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity));color:rgb(250 250 249/var(--tw-text-opacity))}button[data-v-b8c39d64]:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}";
}


// --------------------
// Request: /pages/restaurants.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/Nav.vue ($id_9848a0a6)
// - /components/restaurant/Table.vue ($id_85a5084f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a9d5d7ec = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/restaurant/Table.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_RestaurantTable = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "min-h-screen" }, _attrs))}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>restaurants.vue | path=&#39;/restaurants&#39;</h1><main class="py-[5%] flex items-center justify-between text-center flex-col"><section class="prose"><h1 class="title-primary">Hello this is the restaurant</h1><a class="">Go to restaurants</a></section>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_RestaurantTable, null, null, _parent))
  _push(`</main></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/restaurants.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/restaurants.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/restaurant/Table.vue
// Parents: 
// - /pages/restaurants.vue?macro=true ($id_a9d5d7ec)
// - /pages/restaurants.vue ($id_a4446a90)
// Dependencies: 
// - /components/restaurant/Row.vue ($id_f6cab29f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /data.json ($id_1d010d39)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_85a5084f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/restaurant/Row.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/data.json");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  setup(__props, { expose }) {
    expose();
    const restaurantsOrganized = {
      first: [...__vite_ssr_import_2__.default].splice(0, 25),
      seconde: [...__vite_ssr_import_2__.default].splice(25, 25)
    };
    console.log("restaurantsOrganized: ", restaurantsOrganized);
    const __returned__ = { restaurantsOrganized };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RestaurantRow = __vite_ssr_import_0__.default;
  _push(`<table${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "border border-solid border-collapse" }, _attrs))}><thead><tr><th class="border border-blue-500">State</th><th class="border border-blue-500">City</th></tr></thead><tbody><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.restaurantsOrganized.first, (restaurant) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_RestaurantRow, { key: restaurant }, null, _parent));
  });
  _push(`<!--]--></tbody></table>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/restaurant/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/components/restaurant/Table.vue"]]);
;
}


// --------------------
// Request: /data.json
// Parents: 
// - /components/restaurant/Table.vue ($id_85a5084f)
// Dependencies: 

// --------------------
const $id_1d010d39 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		rank: 1,
		name: "McDonalds",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "39,222",
		imageUrl: "https://images.unsplash.com/photo-1602400236316-f5e3b6d2314c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5070&q=80"
	},
	{
		id: 2,
		rank: 2,
		name: "Starbucks",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 26.5,
		numberOfStores: "33,295",
		imageUrl: "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJidWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
	},
	{
		id: 3,
		rank: 3,
		name: "Chick-fil-A",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 4.3,
		numberOfStores: "2,774",
		imageUrl: "https://images.unsplash.com/photo-1558883188-817ab9ecf395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpY2slMjBmaWwlMjBBfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
	},
	{
		id: 4,
		rank: 4,
		name: "Taco Bell",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 4.22,
		numberOfStores: "7,072",
		imageUrl: "https://www.tacobell.ca/static/images/homepage/bottom-right-mobile.ce18cb836e49.jpg"
	},
	{
		id: 5,
		rank: 5,
		name: "Wendy's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 4.01,
		numberOfStores: "6,534",
		imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/7A97/production/_118438313_wendys.jpg"
	},
	{
		id: 6,
		rank: 6,
		name: "Burger King",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 3.97,
		numberOfStores: "6,933",
		imageUrl: "https://image.cnbcfm.com/api/v1/image/106936180-1630511993739-gettyimages-1234486065-PWeaver-Milton-210804-04.jpeg?v=1630512088"
	},
	{
		id: 7,
		rank: 7,
		name: "Dunkin'",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 3.95,
		numberOfStores: "8,522",
		imageUrl: "https://www.boston.com/wp-content/uploads/2021/11/Dunkin-holiday-drinks-61815ecc2952c.jpg"
	},
	{
		id: 8,
		rank: 8,
		name: "Subway",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 16.4,
		numberOfStores: "37,343",
		imageUrl: "https://cdn.britannica.com/08/193908-050-66767D57/view-Subway-restaurant-Bangkok-Thailand.jpg"
	},
	{
		id: 9,
		rank: 9,
		name: "Domino's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/12/fe/c3/86/domino-s-pizza.jpg"
	},
	{
		id: 10,
		rank: 10,
		name: "Chipotle Mexican Grill",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 14.4,
		numberOfStores: "2,333",
		imageUrl: "https://www.investopedia.com/thmb/2sLc9U9RNVeFblgbDxh_uL1tnC4=/680x440/filters:fill(auto,1)/shutterstock_186861896-5bfc33c646e0fb00517d7538.jpg"
	},
	{
		id: 11,
		rank: 11,
		name: "Sonic Drive-In",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 4.7,
		numberOfStores: "3.563",
		imageUrl: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2020-07/SonicEXT.jpg?itok=X6-nYuXg"
	},
	{
		id: 12,
		rank: 12,
		name: "Pizza Hut",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 1.04,
		numberOfStores: "18,435",
		imageUrl: "https://www.ottawabusinessjournal.com/wp-content/uploads/2019/07/e5e17083-273e-40f5-91cf-63a5ca339e99-ea3557c8-71a1-48e8-967f-4c166054baab-pizza-image_no-text.jpg"
	},
	{
		id: 13,
		rank: 13,
		name: "Panera Bread",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 2.8,
		numberOfStores: "2,333",
		imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAONmid71xguDSR8lHs4QWYNjsauHfYgBTEQ&usqp=CAU"
	},
	{
		id: 14,
		rank: 14,
		name: "KFC",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 28.5,
		numberOfStores: "24,536",
		imageUrl: "https://www.tasteofhome.com/wp-content/uploads/2020/03/kfc-sign-GettyImages-921240630.jpg"
	},
	{
		id: 15,
		rank: 15,
		name: "Popeyes Louisiana Kitchen",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.godairyfree.org/wp-content/uploads/2009/12/fast-food-popeyes.jpg"
	},
	{
		id: 16,
		rank: 16,
		name: "Arby's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://media-exp1.licdn.com/dms/image/C561BAQFOQyq-un_zNw/company-background_10000/0/1519796443509?e=2159024400&v=beta&t=0Olg06sblnfDhRfh8DRNvGDJFxZrO2072lkQHhvV5N8"
	},
	{
		id: 17,
		rank: 17,
		name: "Dairy Queen",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/blizzard-incentives.jpg?itok=9R-RrxC9"
	},
	{
		id: 18,
		rank: 18,
		name: "Little Caesars",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.masslive.com/resizer/M1NIHyzJjJdMcvw_LZt7jSwXFc8=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/2JI5P5VPDBEQNJR5CAYRC5VCMU.jpg"
	},
	{
		id: 19,
		rank: 19,
		name: "Panda Express",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.seriouseats.com/thmb/n1EmSyrh7pEal-eSsXEYzuKyDqg=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__05__20140514-panda-express-sign-2e429c96c13746fb8d648e1b8eca9c80.jpg"
	},
	{
		id: 20,
		rank: 20,
		name: "Jack in the Box",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/jack-box-expects-product-innovation-drive-growth.jpg?itok=tj3dRL1G"
	},
	{
		id: 21,
		rank: 21,
		name: "Olive Garden",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://media.olivegarden.com/en_us/images/marketing/olive-garden-tuscan-italian-restaurant-g5-rdv.jpg"
	},
	{
		id: 22,
		rank: 22,
		name: "Papa John's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://fox59.com/wp-content/uploads/sites/21/2021/11/PapaJOhnsGettyImages-1044350104.jpg?w=1280"
	},
	{
		id: 23,
		rank: 23,
		name: "Buffalo Wild Wings",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.mashed.com/img/gallery/scandals-that-buffalo-wild-wings-can-never-live-down/intro-1602864744.jpg"
	},
	{
		id: 24,
		rank: 24,
		name: "Applebee's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.nrn.com/sites/nrn.com/files/applebees-storefront.png"
	},
	{
		id: 25,
		rank: 25,
		name: "Chili's Grill & Bar",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/06/a4/b9/e7/chili-s-grill-bar.jpg"
	},
	{
		id: 26,
		rank: 26,
		name: "Whataburger",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f29710fdb2bffa70809fa0f%2FWhataburger%2F960x0.jpg%3Ffit%3Dscale"
	},
	{
		id: 27,
		rank: 27,
		name: "Texas Roadhouse",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://cdn.vox-cdn.com/thumbor/Om_vzCuDw_nMBs6RDOlYdHfpApQ=/0x0:1000x439/1200x800/filters:focal(421x92:581x252)/cdn.vox-cdn.com/uploads/chorus_image/image/66890945/Texas_Roadhouse.0.jpg"
	},
	{
		id: 28,
		rank: 28,
		name: "IHOP",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://media.blogto.com/articles/20210816-ihop.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
	},
	{
		id: 29,
		rank: 29,
		name: "Outback Steakhouse",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.nrn.com/sites/nrn.com/files/Bloomin-Brands-Outback-Q3-strides-toward-multi-channel.jpg"
	},
	{
		id: 30,
		rank: 30,
		name: "Zaxby's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://nmgprod.s3.amazonaws.com/media/files/1b/c9/1bc93563b43c4752c7203dd4f44507c5/cover_image_1620397420.jpg.760x400_q85_crop_upscale.jpg"
	},
	{
		id: 31,
		rank: 31,
		name: "Culver's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.mashed.com/img/gallery/what-you-dont-know-about-culvers/intro-1560520860.jpg"
	},
	{
		id: 32,
		rank: 32,
		name: "Jimmy John's Gourmet Sandwiches",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://s11284.pcdn.co/wp-content/uploads/2020/06/jimmy-johns-sandwich-shop-700x467.jpg.optimal.jpg"
	},
	{
		id: 33,
		rank: 33,
		name: "Wingstop",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2020-11/Wingstop.jpg?itok=BLKTA-Z-"
	},
	{
		id: 34,
		rank: 34,
		name: "Hardee's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Hardee%27s%2C_Salem%2C_Virginia_.jpg"
	},
	{
		id: 35,
		rank: 35,
		name: "Cracker Barrel",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F06%2F05%2Fcracker-barrel-reopening-testing-alcohol-sales-FT-BLOG0620.jpg"
	},
	{
		id: 36,
		rank: 36,
		name: "Red Lobster",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/05/931/524/Red-Lobster-iStock.jpg?ve=1&tl=1"
	},
	{
		id: 37,
		rank: 37,
		name: "Denny's",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.nrn.com/sites/nrn.com/files/Dennys-off-premises-sales-Burger-Den-Melt-Down-Q2-2021.jpg"
	},
	{
		id: 38,
		rank: 38,
		name: "Raising Cane's Chicken Fingers",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: ""
	},
	{
		id: 39,
		rank: 39,
		name: "Five Guys",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.gannett-cdn.com/presto/2021/05/01/NVIC/bfadcf26-3bd0-41ba-be08-585c996f25f5-Raising_Canes.jpg?auto=webp&crop=767,432,x0,y39&format=pjpg&width=1200"
	},
	{
		id: 40,
		rank: 40,
		name: "Jersey Mike's Subs",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.jerseymikes.ca/media/static/locations/1.jpg"
	},
	{
		id: 41,
		rank: 41,
		name: "LongHorn Steakhouse",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://i.ytimg.com/vi/8KwRTE91U9I/maxresdefault.jpg"
	},
	{
		id: 42,
		rank: 42,
		name: "The Cheesecake Factory",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://cdn.vox-cdn.com/thumbor/Is5STGnbZqVB_hV43MzFReLWneg=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19832787/Cheesecake_Factory.jpg"
	},
	{
		id: 43,
		rank: 43,
		name: "Bojangles",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.al.com/resizer/X2ZnTmIKqrG4RFpbSUSQco1Rfag=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/WNRWZSHLQVGEBNOJHGATJT7HHI.jpg"
	},
	{
		id: 44,
		rank: 44,
		name: "Carl's Jr.",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: ""
	},
	{
		id: 45,
		rank: 45,
		name: "In-N-Out Burger",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/35/2560x1920/sd-aspect-1472672403-1659715513-dcdcd9dd17-o.jpg?resize=480:*"
	},
	{
		id: 46,
		rank: 46,
		name: "Red Robin",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.mashed.com/img/gallery/the-real-reason-red-robin-is-struggling/intro-1553611735.jpg"
	},
	{
		id: 47,
		rank: 47,
		name: "El Pollo Loco",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://cdn.winsightmedia.com/platform/files/public/2021-03/background/El-Pollo-Loco-Remodel_1615569606.png?VersionId=wruIYBU_U4juOW6GMUJ0nyZuzMHWo1PB"
	},
	{
		id: 48,
		rank: 48,
		name: "Del Taco",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/del-taco-refranchises-san-diego-market.jpg?itok=o1zpCTL8"
	},
	{
		id: 49,
		rank: 49,
		name: "Qdoba Mexican Eats",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://cdn.vox-cdn.com/thumbor/zBEzySds-coOKCa7Ymm2H56gr6A=/0x0:3500x2336/1200x800/filters:focal(1470x888:2030x1448)/cdn.vox-cdn.com/uploads/chorus_image/image/58037473/L_Omaha-1-2.0.0.jpg"
	},
	{
		id: 50,
		rank: 50,
		name: "Firehouse Subs",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores reprehenderit at culpa atque, dolorum tempore dignissimos nobis ipsam, aliquid iure accusantium natus quam dolor neque optio dolore cum! Laborum veritatis et sed soluta minima fuga impedit inventore doloremque at, reiciendis esse neque obcaecati voluptatum nemo. Omnis ducimus, perspiciatis dolores quidem optio adipisci explicabo facere consequatur, aspernatur fuga, molestias iure laboriosam obcaecati ipsa quasi. Iure dolorem dignissimos odio quisquam. Maiores quasi et laudantium aliquid sequi soluta unde hic optio deleniti!",
		revenue: 42.4,
		numberOfStores: "12,333",
		imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJM5nrxZjrmUw3VpbmiRzil2TyCZXyQ2mx5w&usqp=CAU"
	}
];;
}


// --------------------
// Request: /pages/demo-1.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/Nav.vue ($id_9848a0a6)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f64e1822 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<!--[-->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<div class="prose y-[5%] flex items-center justify-between text-center flex-col"><h1 class="title-primary">demo-1.vue | path=&#39;demo-1&#39;</h1></div><!--]-->`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/demo-1.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo-1.vue"]]);
}


// --------------------
// Request: /pages/demo3.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /components/Footer.vue ($id_f3d8f325)
// - /components/restaurant/Row.vue ($id_f6cab29f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_dc4be931 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Footer.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/restaurant/Row.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_Footer = __vite_ssr_import_1__.default
  const _component_RestaurantRow = __vite_ssr_import_2__.default

  _push(`<!--[--><div class="prose"><h1 class="">------pages/demos3.vue------</h1></div>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLayout, { name: "custom" }, {
    custom: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${_scopeId}>xxxxxxxxxxx</div>`)
      } else {
        return [
          __vite_ssr_import_4__.createVNode("div", null, "xxxxxxxxxxx")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${_scopeId}>yyyyyyyyyyyy</div>`)
      } else {
        return [
          __vite_ssr_import_4__.createVNode("div", null, "yyyyyyyyyyyy")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_Footer, null, null, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_RestaurantRow, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/demo3.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo3.vue"]]);
}


// --------------------
// Request: /pages/demo4.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/LazyText.vue ($id_cffff25c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c5e3c87a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/LazyText.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const show = __vite_ssr_import_1__.ref(false);
const handleClick = () => {
	show.value = (!show.value);
};

const __returned__ = { show, handleClick, ref: __vite_ssr_import_1__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_lazyText = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "" }, _attrs))}>`)
  if ($setup.show) {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_lazyText, null, null, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`<button>显示/隐藏</button></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/demo4.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/demo4.vue"]]);
}


// --------------------
// Request: /pages/good-[name]/demo2-[id].vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/good-[name]/demo2-[id].vue?vue&type=style&index=0&scoped=true&lang.css ($id_c16b8401)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_def97ba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const route = __vite_ssr_import_0__.useRoute();
const id = __vite_ssr_import_1__.ref(route.params.id);
const name = __vite_ssr_import_1__.ref(route.params.name);

const __returned__ = { route, id, name, ref: __vite_ssr_import_1__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "prose" }, _attrs))
  } data-v-d4772b74><h1 data-v-d4772b74>demo2-id.vue | id= ${
    __vite_ssr_import_3__.ssrInterpolate($setup.id)
  }</h1><h1 data-v-d4772b74>demo2-id.vue | name= ${
    __vite_ssr_import_3__.ssrInterpolate($setup.name)
  }</h1></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/good-[name]/demo2-[id].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/good-[name]/demo2-[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-d4772b74"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/good-[name]/demo2-[id].vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/Nav.vue ($id_9848a0a6)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "min-h-screen" }, _attrs))}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<main class="py-[5%] flex items-center justify-between text-center flex-col"><section class="prose"><h1>index.vue | path=&#39;/&#39;</h1><h1 class="title-primary">Welcome to the restaurantly</h1><a class="">Go to restaurants</a>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/demo-1" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>page demo-1</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "page demo-1")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/good-jspang/demo2-8" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>page demo-2</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "page demo-2")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/parent/child" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>parente-child</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "parente-child")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, { to: "/parent/child-2" }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1${_scopeId}>child-2</h1>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("h1", null, "child-2")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</section><section><p class=""></p><div class=""><template><div class=""><h2 class=""></h2><ul class=""><template><li class=""></li></template></ul><ul class=""><li class="">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, null, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Get Started`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode("Get Started")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div></template></div></section></main></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/index.vue"]]);
}


// --------------------
// Request: /pages/parent/child-2.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_832bd101 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "" }, _attrs))}><h1 class="title-primary">child-2.vue</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/child-2.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/child-2.vue"]]);
}


// --------------------
// Request: /pages/parent/child.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3d38c63f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "" }, _attrs))}><h1 class="title-primary">child.vue</h1></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/child.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/child.vue"]]);
}


// --------------------
// Request: /pages/parent/demo5.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7aae50e9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_0__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/demo5.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_1__.default(_sfc_main, [['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/demo5.vue"]]);
}


// --------------------
// Request: /pages/parent/validator.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/zod/lib/index.mjs ($id_64fe3fb6)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/parent/validator.vue?vue&type=style&index=0&scoped=true&lang.css ($id_7eb4630f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cd7804c4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/zod/lib/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");



const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const FormSchema = __vite_ssr_import_0__.z.object({
  email: __vite_ssr_import_0__.z.string().email(),
  password: __vite_ssr_import_0__.z.literal(),
  confirm: __vite_ssr_import_0__.z.literal(),
});
const isRequired = (value) => (value ? true : 'This field is required');
const { value, errorMessage } = __vite_ssr_import_1__.useField('field', isRequired);

const __returned__ = { FormSchema, isRequired, value, errorMessage, z: __vite_ssr_import_0__.z, useField: __vite_ssr_import_1__.useField }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "w-screen flex justify-center" }, _attrs))
  } data-v-4afeabb4><div class="root bg-slate-200" data-v-4afeabb4><h2 data-v-4afeabb4>Create an Account</h2><p data-v-4afeabb4><input type="text" placeholder="email" data-v-4afeabb4></p><p data-v-4afeabb4><input type="password" placeholder="Password" data-v-4afeabb4></p><p data-v-4afeabb4><input type="text" placeholder="Confirm Password" data-v-4afeabb4></p><p data-v-4afeabb4><input name="field"${
    __vite_ssr_import_3__.ssrRenderAttr("value", $setup.value)
  } data-v-4afeabb4> <span data-v-4afeabb4>${
    __vite_ssr_import_3__.ssrInterpolate($setup.errorMessage)
  }</span></p><button data-v-4afeabb4>submit</button></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/parent/validator.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent/validator.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-4afeabb4"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent/validator.vue"]]);
}


// --------------------
// Request: /pages/parent.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0baa0e63 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  setup(__props, { expose }) {
  expose();


const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtChild = __vite_ssr_import_1__.resolveComponent("NuxtChild")
  const _component_NuxtChild_2 = __vite_ssr_import_1__.resolveComponent("NuxtChild-2")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "prose" }, _attrs))}><h1>parente.vue</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtChild, null, null, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtChild_2, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/parent.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/parent.vue"]]);
}


// --------------------
// Request: /pages/quickstart.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/quickstart.vue?vue&type=style&index=0&scoped=true&lang.css ($id_7d315e21)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bd2d66fd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required right now!';
};

const __returned__ = { isRequired }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VForm = __vite_ssr_import_0__.resolveComponent("VForm")
  const _component_VField = __vite_ssr_import_0__.resolveComponent("VField")
  const _component_VErrorMessage = __vite_ssr_import_0__.resolveComponent("VErrorMessage")

  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-screen flex justify-center" }, _attrs))} data-v-b8c39d64><div class="root bg-slate-200" data-v-b8c39d64><h2 class="title is-2 has-text-centered my-6" data-v-b8c39d64>VeeValidate Quickstart</h2>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_VForm, { class: "card p-6 has-background-light" }, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_1__.ssrRenderComponent(_component_VField, {
          name: "field",
          rules: $setup.isRequired,
          class: "input",
          placeholder: "Enter text"
        }, null, _parent, _scopeId))
        _push(__vite_ssr_import_1__.ssrRenderComponent(_component_VErrorMessage, {
          name: "field",
          class: "help is-danger"
        }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_0__.createVNode(_component_VField, {
            name: "field",
            rules: $setup.isRequired,
            class: "input",
            placeholder: "Enter text"
          }),
          __vite_ssr_import_0__.createVNode(_component_VErrorMessage, {
            name: "field",
            class: "help is-danger"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<button data-v-b8c39d64>submit</button></div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/quickstart.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/quickstart.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-b8c39d64"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/quickstart.vue"]]);
}


// --------------------
// Request: /pages/restaurants.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs ($id_cf1b21eb)
// Dependencies: 
// - /components/Nav.vue ($id_9848a0a6)
// - /components/restaurant/Table.vue ($id_85a5084f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a4446a90 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/restaurant/Table.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default
  const _component_RestaurantTable = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "min-h-screen" }, _attrs))}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Nav, null, null, _parent))
  _push(`<h1>restaurants.vue | path=&#39;/restaurants&#39;</h1><main class="py-[5%] flex items-center justify-between text-center flex-col"><section class="prose"><h1 class="title-primary">Hello this is the restaurant</h1><a class="">Go to restaurants</a></section>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_RestaurantTable, null, null, _parent))
  _push(`</main></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/restaurants.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/pages/restaurants.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_f7933344 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_04974f24 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /plugins/veevalidate-componets.ts
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// --------------------
const $id_79b1b8ec = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VForm", __vite_ssr_import_1__.Form);
  nuxtApp.vueApp.component("VField", __vite_ssr_import_1__.Field);
  nuxtApp.vueApp.component("VErrorMessage", __vite_ssr_import_1__.ErrorMessage);
});
;
}


// --------------------
// Request: /plugins/veevalidate-rules.ts
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs ($id_4b0d3c69)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vee-validate/dist/vee-validate.esm.js ($id_2387c42e)
// - /node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js ($id_c1357939)
// --------------------
const $id_5c45c07f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vee-validate/dist/vee-validate.esm.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  Object.keys(__vite_ssr_import_2__).filter((k) => k !== "default").forEach((rule) => {
    __vite_ssr_import_1__.defineRule(rule, __vite_ssr_import_2__[rule]);
    console.log(rule);
  });
});
;
}


// --------------------
// Request: /node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js
// Parents: 
// - /plugins/veevalidate-rules.ts ($id_5c45c07f)
// Dependencies: 

// --------------------
const $id_c1357939 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
  * vee-validate v4.5.11
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
/* eslint-disable no-misleading-character-class */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
const alpha = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    ug: /^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i,
};
const alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    ug: /^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i,
};
const alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i,
};
const alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    ug: /^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ_-]*$/i,
};
const getLocale = (params) => {
    if (!params) {
        return undefined;
    }
    return Array.isArray(params) ? params[0] : params.locale;
};

function getSingleParam(params, paramName) {
    return Array.isArray(params) ? params[0] : params[paramName];
}
function isEmpty(value) {
    if (value === null || value === undefined || value === '') {
        return true;
    }
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }
    return false;
}

const alphaValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha).some(loc => alpha[loc].test(valueAsString));
    }
    return (alpha[locale] || alpha.en).test(valueAsString);
};

const alphaDashValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaDashValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(loc => alphaDash[loc].test(valueAsString));
    }
    return (alphaDash[locale] || alphaDash.en).test(valueAsString);
};

const alphaNumValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaNumValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(loc => alphanumeric[loc].test(valueAsString));
    }
    return (alphanumeric[locale] || alphanumeric.en).test(valueAsString);
};

const alphaSpacesValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const locale = getLocale(params);
    if (Array.isArray(value)) {
        return value.every(val => alphaSpacesValidator(val, { locale }));
    }
    const valueAsString = String(value);
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(loc => alphaSpaces[loc].test(valueAsString));
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(valueAsString);
};

function getParams$1(params) {
    if (!params) {
        return {
            min: 0,
            max: 0,
        };
    }
    if (Array.isArray(params)) {
        return { min: params[0], max: params[1] };
    }
    return params;
}
const betweenValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const { min, max } = getParams$1(params);
    if (Array.isArray(value)) {
        return value.every(val => !!betweenValidator(val, { min, max }));
    }
    const valueAsNumber = Number(value);
    return Number(min) <= valueAsNumber && Number(max) >= valueAsNumber;
};

const confirmedValidator = (value, params) => {
    const target = getSingleParam(params, 'target');
    return String(value) === String(target);
};

const digitsValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const length = getSingleParam(params, 'length');
    if (Array.isArray(value)) {
        return value.every(val => digitsValidator(val, { length }));
    }
    const strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === Number(length);
};

const validateImage = (file, width, height) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const URL = window.URL || window.webkitURL;
    return new Promise(resolve => {
        const image = new Image();
        image.onerror = () => resolve(false);
        image.onload = () => resolve(image.width === width && image.height === height);
        image.src = URL.createObjectURL(file);
    });
};
function getParams(params) {
    if (!params) {
        return { width: 0, height: 0 };
    }
    if (Array.isArray(params)) {
        return { width: Number(params[0]), height: Number(params[1]) };
    }
    return {
        width: Number(params.width),
        height: Number(params.height),
    };
}
const dimensionsValidator = (files, params) => {
    if (isEmpty(files)) {
        return true;
    }
    const { width, height } = getParams(params);
    const list = [];
    const fileList = Array.isArray(files) ? files : [files];
    for (let i = 0; i < fileList.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(fileList[i].name)) {
            return Promise.resolve(false);
        }
        list.push(fileList[i]);
    }
    return Promise.all(list.map(file => validateImage(file, width, height))).then(values => {
        return values.every(v => v);
    });
};

/* eslint-disable no-useless-escape */
const emailValidator = (value) => {
    if (isEmpty(value)) {
        return true;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (Array.isArray(value)) {
        return value.every(val => re.test(String(val)));
    }
    return re.test(String(value));
};

const extValidator = (files, extensions) => {
    if (isEmpty(files)) {
        return true;
    }
    if (!extensions) {
        extensions = [];
    }
    const regex = new RegExp(`.(${extensions.join('|')})$`, 'i');
    if (Array.isArray(files)) {
        return files.every(file => regex.test(file.name));
    }
    return regex.test(files.name);
};

const imageValidator = (files) => {
    if (isEmpty(files)) {
        return true;
    }
    const regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
    if (Array.isArray(files)) {
        return files.every(file => regex.test(file.name));
    }
    return regex.test(files.name);
};

const integerValidator = (value) => {
    if (isEmpty(value)) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(val => /^-?[0-9]+$/.test(String(val)));
    }
    return /^-?[0-9]+$/.test(String(value));
};

const isValidator = (value, params) => {
    const other = getSingleParam(params, 'other');
    return value === other;
};

const isNotValidator = (value, params) => {
    const other = getSingleParam(params, 'other');
    return value !== other;
};

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

const lengthValidator = (value, params) => {
    // Normalize the length value
    const length = getSingleParam(params, 'length');
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = Array.from(value);
    }
    return value.length === Number(length);
};

const maxLengthValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const length = getSingleParam(params, 'length');
    if (Array.isArray(value)) {
        return value.every(val => maxLengthValidator(val, { length }));
    }
    return String(value).length <= Number(length);
};

const maxValueValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const max = getSingleParam(params, 'max');
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(val => maxValueValidator(val, { max }));
    }
    return Number(value) <= Number(max);
};

const mimesValidator = (files, mimes) => {
    if (isEmpty(files)) {
        return true;
    }
    if (!mimes) {
        mimes = [];
    }
    const regex = new RegExp(`${mimes.join('|').replace('*', '.+')}$`, 'i');
    if (Array.isArray(files)) {
        return files.every(file => regex.test(file.type));
    }
    return regex.test(files.type);
};

const minValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const length = getSingleParam(params, 'length');
    if (Array.isArray(value)) {
        return value.every(val => minValidator(val, { length }));
    }
    return String(value).length >= Number(length);
};

const minValueValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    const min = getSingleParam(params, 'min');
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(val => minValueValidator(val, { min }));
    }
    return Number(value) >= Number(min);
};

const oneOfValidator = (value, list) => {
    if (isEmpty(value)) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(val => oneOfValidator(val, list));
    }
    return Array.from(list).some(item => {
        // eslint-disable-next-line
        return item == value;
    });
};

const excludedValidator = (value, list) => {
    if (isEmpty(value)) {
        return true;
    }
    return !oneOfValidator(value, list);
};

const ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
const en = /^[0-9]+$/;
const numericValidator = (value) => {
    if (isEmpty(value)) {
        return true;
    }
    const testValue = (val) => {
        const strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};

const regexValidator = (value, params) => {
    if (isEmpty(value)) {
        return true;
    }
    let regex = getSingleParam(params, 'regex');
    if (typeof regex === 'string') {
        regex = new RegExp(regex);
    }
    if (Array.isArray(value)) {
        return value.every(val => regexValidator(val, { regex }));
    }
    return regex.test(String(value));
};

const requiredValidator = (value) => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) {
        return false;
    }
    return !!String(value).trim().length;
};

const sizeValidator = (files, params) => {
    if (isEmpty(files)) {
        return true;
    }
    let size = getSingleParam(params, 'size');
    size = Number(size);
    if (isNaN(size)) {
        return false;
    }
    const nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (let i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};

const urlValidator = (value, params) => {
    var _a;
    if (isEmpty(value)) {
        return true;
    }
    let pattern = getSingleParam(params, 'pattern');
    if (typeof pattern === 'string') {
        pattern = new RegExp(pattern);
    }
    try {
        // eslint-disable-next-line no-new
        new URL(value);
    }
    catch (_b) {
        return false;
    }
    return (_a = pattern === null || pattern === void 0 ? void 0 : pattern.test(value)) !== null && _a !== void 0 ? _a : true;
};

/* eslint-disable camelcase */
const all = {
    alpha_dash: alphaDashValidator,
    alpha_num: alphaNumValidator,
    alpha_spaces: alphaSpacesValidator,
    alpha: alphaValidator,
    between: betweenValidator,
    confirmed: confirmedValidator,
    digits: digitsValidator,
    dimensions: dimensionsValidator,
    email: emailValidator,
    ext: extValidator,
    image: imageValidator,
    integer: integerValidator,
    is_not: isNotValidator,
    is: isValidator,
    length: lengthValidator,
    max_value: maxValueValidator,
    max: maxLengthValidator,
    mimes: mimesValidator,
    min_value: minValueValidator,
    min: minValidator,
    not_one_of: excludedValidator,
    numeric: numericValidator,
    one_of: oneOfValidator,
    regex: regexValidator,
    required: requiredValidator,
    size: sizeValidator,
    url: urlValidator,
};


Object.defineProperty(__vite_ssr_exports__, "alpha", { enumerable: true, configurable: true, get(){ return alphaValidator }});
Object.defineProperty(__vite_ssr_exports__, "alpha_dash", { enumerable: true, configurable: true, get(){ return alphaDashValidator }});
Object.defineProperty(__vite_ssr_exports__, "alpha_num", { enumerable: true, configurable: true, get(){ return alphaNumValidator }});
Object.defineProperty(__vite_ssr_exports__, "alpha_spaces", { enumerable: true, configurable: true, get(){ return alphaSpacesValidator }});
Object.defineProperty(__vite_ssr_exports__, "between", { enumerable: true, configurable: true, get(){ return betweenValidator }});
Object.defineProperty(__vite_ssr_exports__, "confirmed", { enumerable: true, configurable: true, get(){ return confirmedValidator }});
Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return all }});
Object.defineProperty(__vite_ssr_exports__, "digits", { enumerable: true, configurable: true, get(){ return digitsValidator }});
Object.defineProperty(__vite_ssr_exports__, "dimensions", { enumerable: true, configurable: true, get(){ return dimensionsValidator }});
Object.defineProperty(__vite_ssr_exports__, "email", { enumerable: true, configurable: true, get(){ return emailValidator }});
Object.defineProperty(__vite_ssr_exports__, "ext", { enumerable: true, configurable: true, get(){ return extValidator }});
Object.defineProperty(__vite_ssr_exports__, "image", { enumerable: true, configurable: true, get(){ return imageValidator }});
Object.defineProperty(__vite_ssr_exports__, "integer", { enumerable: true, configurable: true, get(){ return integerValidator }});
Object.defineProperty(__vite_ssr_exports__, "is", { enumerable: true, configurable: true, get(){ return isValidator }});
Object.defineProperty(__vite_ssr_exports__, "is_not", { enumerable: true, configurable: true, get(){ return isNotValidator }});
Object.defineProperty(__vite_ssr_exports__, "length", { enumerable: true, configurable: true, get(){ return lengthValidator }});
Object.defineProperty(__vite_ssr_exports__, "max", { enumerable: true, configurable: true, get(){ return maxLengthValidator }});
Object.defineProperty(__vite_ssr_exports__, "max_value", { enumerable: true, configurable: true, get(){ return maxValueValidator }});
Object.defineProperty(__vite_ssr_exports__, "mimes", { enumerable: true, configurable: true, get(){ return mimesValidator }});
Object.defineProperty(__vite_ssr_exports__, "min", { enumerable: true, configurable: true, get(){ return minValidator }});
Object.defineProperty(__vite_ssr_exports__, "min_value", { enumerable: true, configurable: true, get(){ return minValueValidator }});
Object.defineProperty(__vite_ssr_exports__, "not_one_of", { enumerable: true, configurable: true, get(){ return excludedValidator }});
Object.defineProperty(__vite_ssr_exports__, "numeric", { enumerable: true, configurable: true, get(){ return numericValidator }});
Object.defineProperty(__vite_ssr_exports__, "one_of", { enumerable: true, configurable: true, get(){ return oneOfValidator }});
Object.defineProperty(__vite_ssr_exports__, "regex", { enumerable: true, configurable: true, get(){ return regexValidator }});
Object.defineProperty(__vite_ssr_exports__, "required", { enumerable: true, configurable: true, get(){ return requiredValidator }});
Object.defineProperty(__vite_ssr_exports__, "size", { enumerable: true, configurable: true, get(){ return sizeValidator }});
Object.defineProperty(__vite_ssr_exports__, "url", { enumerable: true, configurable: true, get(){ return urlValidator }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/root-component.mjs
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_36ef6c06 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/root-component.mjs ($id_36ef6c06)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/error-component.mjs ($id_6eac2812)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/error-component.mjs");



const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_6eac2812 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/error-component.mjs ($id_6eac2812)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_a643f472 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useMeta }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.isVue3 }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.defineNuxtLink }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useTransitionState }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:-ms-grid;display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:-ms-grid;display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs ($id_a643f472)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/app-component.mjs
// Parents: 
// - /Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry ($id_e6d3fd88)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_a5fe1438 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/app-component.mjs ($id_a5fe1438)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __vite_ssr_import_0__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`<h4>Hello nuxt 3</h4></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/app.vue"]]);
}


const __modules__ = {
  "/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry": $id_e6d3fd88,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/paths.mjs": $id_1a98c859,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/css.mjs": $id_ef231631,
  "/assets/css/tailwind.css": $id_f75548e1,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/plugins/server.mjs": $id_4b0d3c69,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/components.plugin.mjs": $id_f2b42984,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/meta.config.mjs": $id_ce41cec4,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/routes.mjs": $id_cf1b21eb,
  "/pages/demo-1.vue?macro=true": $id_1ea4b9ef,
  "/components/Nav.vue": $id_9848a0a6,
  "/node_modules/@iconify/vue/dist/iconify.mjs": $id_006f91fb,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/demo3.vue?macro=true": $id_bd952890,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/layouts.mjs": $id_d735555b,
  "/layouts/custom.vue": $id_d158cf1f,
  "/components/Footer.vue": $id_f3d8f325,
  "/layouts/default.vue": $id_7689e89d,
  "/components/restaurant/Row.vue": $id_f6cab29f,
  "/pages/demo4.vue?macro=true": $id_7d9abb22,
  "/components/LazyText.vue": $id_cffff25c,
  "/pages/good-[name]/demo2-[id].vue?macro=true": $id_386888dc,
  "/pages/good-[name]/demo2-[id].vue?vue&type=style&index=0&scoped=true&lang.css": $id_c16b8401,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/pages/parent.vue?macro=true": $id_0be85b41,
  "/pages/parent/child-2.vue?macro=true": $id_3b3dc3b0,
  "/pages/parent/child.vue?macro=true": $id_ea97a7ed,
  "/pages/parent/demo5.vue?macro=true": $id_096ce7b5,
  "/pages/parent/validator.vue?macro=true": $id_9d3da6f7,
  "/node_modules/zod/lib/index.mjs": $id_64fe3fb6,
  "/node_modules/vee-validate/dist/vee-validate.esm.js": $id_2387c42e,
  "/node_modules/@vue/devtools-api/lib/esm/index.js": $id_24b1ff15,
  "/node_modules/@vue/devtools-api/lib/esm/env.js": $id_304a908e,
  "/node_modules/@vue/devtools-api/lib/esm/const.js": $id_8e00d2d1,
  "/node_modules/@vue/devtools-api/lib/esm/proxy.js": $id_c00b31f5,
  "/node_modules/@vue/devtools-api/lib/esm/time.js": $id_86120667,
  "/node_modules/@vue/devtools-api/lib/esm/api/index.js": $id_550ae022,
  "/node_modules/@vue/devtools-api/lib/esm/api/api.js": $id_92fae9b0,
  "/node_modules/@vue/devtools-api/lib/esm/api/app.js": $id_b65c5853,
  "/node_modules/@vue/devtools-api/lib/esm/api/component.js": $id_614015ea,
  "/node_modules/@vue/devtools-api/lib/esm/api/context.js": $id_2baadcfd,
  "/node_modules/@vue/devtools-api/lib/esm/api/hooks.js": $id_3aa5d48c,
  "/node_modules/@vue/devtools-api/lib/esm/api/util.js": $id_03011152,
  "/node_modules/@vue/devtools-api/lib/esm/plugin.js": $id_674cbbbf,
  "/pages/parent/validator.vue?vue&type=style&index=0&scoped=true&lang.css": $id_7eb4630f,
  "/pages/quickstart.vue?macro=true": $id_bcd290a0,
  "/pages/quickstart.vue?vue&type=style&index=0&scoped=true&lang.css": $id_7d315e21,
  "/pages/restaurants.vue?macro=true": $id_a9d5d7ec,
  "/components/restaurant/Table.vue": $id_85a5084f,
  "/data.json": $id_1d010d39,
  "/pages/demo-1.vue": $id_f64e1822,
  "/pages/demo3.vue": $id_dc4be931,
  "/pages/demo4.vue": $id_c5e3c87a,
  "/pages/good-[name]/demo2-[id].vue": $id_def97ba0,
  "/pages/index.vue": $id_cca58e97,
  "/pages/parent/child-2.vue": $id_832bd101,
  "/pages/parent/child.vue": $id_3d38c63f,
  "/pages/parent/demo5.vue": $id_7aae50e9,
  "/pages/parent/validator.vue": $id_cd7804c4,
  "/pages/parent.vue": $id_0baa0e63,
  "/pages/quickstart.vue": $id_bd2d66fd,
  "/pages/restaurants.vue": $id_a4446a90,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/router.options.mjs": $id_f7933344,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/middleware.mjs": $id_04974f24,
  "/plugins/veevalidate-componets.ts": $id_79b1b8ec,
  "/plugins/veevalidate-rules.ts": $id_5c45c07f,
  "/node_modules/@vee-validate/rules/dist/vee-validate-rules.esm.js": $id_c1357939,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/root-component.mjs": $id_36ef6c06,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/error-component.mjs": $id_6eac2812,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/imports.mjs": $id_a643f472,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/.nuxt/app-component.mjs": $id_a5fe1438,
  "/app.vue": $id_2b46e842
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/developer_ta/nuxtJs/nuxt-3-exercice-06-2022/node_modules/nuxt/dist/app/entry")