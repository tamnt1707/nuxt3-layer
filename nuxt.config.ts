import { createResolver } from "@nuxt/kit";
import fs from "fs";
import path from "path";

const { resolve } = createResolver(import.meta.url);

const locales = fs
  .readdirSync(path.join("./locales"))
  .map((file) => file.replace(/\.json/, ""));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [resolve("./assets/styles/main.scss")],

  app: {
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
    "@nuxtjs/i18n",
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

  i18n: {
    vueI18n: {
      legacy: false,
      locale: process.env.LOCALE,
      fallbackLocale: process.env.LOCALE,
      messages: Object.fromEntries(
        locales.map((locale) => [
          locale,
          JSON.parse(fs.readFileSync(`./locales/${locale}.json`, "utf8")),
        ])
      ),
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
