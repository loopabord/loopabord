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
          ...require("daisyui/src/theming/themes")["valentine"],
          // "primary": "00AACA",
          ".btn-primary": {
            "color": "white"
          },
          ".btn-error": {
            "color": "white"
          },
          ".btn-secondary": {
            "color": "white"
          },
          ".btn-warning": {
            "color": "white"
          }
        },
        dark: {
          ...require("daisyui/src/theming/themes")["synthwave"],
          // "primary": "#00AACA",
        },
      },
    ],
  }
}