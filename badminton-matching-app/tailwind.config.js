/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.vue"], // you forget content
  darkMode: "class", //you should define darkMode here
  theme: {
    extend: {},
    //darkMode: 'class' >> this is mistake
  },
  plugins: [],
};
