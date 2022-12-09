import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [resolve("./assets/styles/main.scss")],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      title: "Nuxt3 Layer",
      viewport: "width=device-width, initial-scale=1",
    },

    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },

  imports: {
    dirs: ["composables", "utils", "constants"],
  },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@import "@/assets/styles/base/mixins.scss";`,
  //       },
  //     },
  //   },
  // },

  modules: [
    "@vueuse/nuxt",
    "nuxt-windicss",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@nuxtjs/html-validator",
  ],

  vueuse: {
    ssrHandlers: true,
  },

  htmlValidator: {
    usePrettier: true,
  },

  runtimeConfig: {
    public: {
      BASE_URL_API: process.env.BASE_URL_API,
    },
  },

  // windicss: {
  //   analyze: {
  //     analysis: {
  //       interpretUtilities: false,
  //     },
  //     server: {
  //       port: 4444,
  //       open: false,
  //     },
  //   },
  // },
});
