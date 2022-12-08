import { createPinia } from "pinia";

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(createPinia());
});
