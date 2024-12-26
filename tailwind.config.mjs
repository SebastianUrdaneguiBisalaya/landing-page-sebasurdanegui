/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD5F00",
        "gray-custom": "#606060",
        "txt-custom-gray": "#e1dbdb",
      },
      fontFamily: {
        "bricolage-grotesque": ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
