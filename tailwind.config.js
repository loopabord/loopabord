/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          // "primary": "00AACA",
          ".btn-primary": {
            "color": "white"
          },
          ".btn-error": {
            "color": "white"
          }
        },
        dark: {
          ...require("daisyui/src/theming/themes")["night"],
          // "primary": "#00AACA",
        },
      },
    ],
  }
}