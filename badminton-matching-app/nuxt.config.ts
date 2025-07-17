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
    "dayjs-nuxt",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
  ],

  i18n: {
    defaultLocale: "th",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "th", name: "Thailand", file: "th.json" },
    ],
  },
  css: ["@/assets/css/main.css"],

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  build: {
    transpile: ["vue-datepicker"],
  },

  piniaPluginPersistedstate: {
    storage: "localStorage",
  },

  dayjs: {
    locales: ["th", "en"],
    plugins: [
      "timezone",
      "buddhistEra",
      "isBetween",
      "customParseFormat",
      "isSameOrAfter",
      "isSameOrBefore",
      "weekOfYear",
      "isoWeek",
      "advancedFormat",
    ],
    defaultLocale: [
      "th",
      {
        weekStart: 1,
        relativeTime: {
          future: "อีก%s",
          past: "%sที่ผ่านมา",
          s: "ไม่กี่วินาที",
          m: "ไม่กี่นาที",
          mm: "%d นาที",
          h: "หนึ่งชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "ไม่กี่วัน",
          dd: "%d วัน",
          M: "หนึ่งเดือน",
          MM: "%d เดือน",
          y: "หนึ่งปี",
          yy: "%d ปี",
        },
      },
    ],
    defaultTimezone: "Asia/Bangkok",
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
    ],
    experimental: {
      processCSSVariables: true,
    },
  },

  compatibilityDate: "2025-05-09",
});
