/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-custom': '#067808',
        'gray-light': '#e2e9f0',
        'yellow-custom': '#eac81f',
        'gray-lighter': '#f8f7f7',
        'off-white': '#fefefe',
    },
  },
},
  plugins: [],
}

