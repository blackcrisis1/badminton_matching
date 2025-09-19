export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  ssr: false,
  sourcemap: { server: true, client: false },

  app: {
    head: {
      title: "Badminton Matching App",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },

  // runtimeConfig: {
  //   public: {
  //     supabaseUrl: process.env.SUPABASE_URL,
  //     supabaseKey: process.env.SUPABASE_KEY,
  //   },
  // },

  imports: {
    dirs: [
      // ... or scan all modules within given directory
      "composables/**",
      "stores/**",
      "utils/helper/**",
    ],
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
  ],

  css: ["@/assets/css/main.css"],

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  ui: {
    colorMode: false,
    theme: {
      colors: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
        "amber",
        "lime",
        "sky",
        "fuchsia",
        "violet",
        "pink",
        "emerald",
        "neutral",
        "blue",
        "yellow",
      ],
    },
  },

  fonts: {
    families: [
      { name: "Poppins", provider: "google" },
      { name: "Sarabun", provider: "google" },
      { name: "Prompt", provider: "google" },
    ],
    experimental: {
      processCSSVariables: true,
    },
  },

  compatibilityDate: "2025-05-09",
});
