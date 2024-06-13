/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E9901E',
        'secondary': '#FBBB28',
        'tertiary': '#B4C42C',
        'quaternary': '#00AEAC',
        'quinary': '#108181',
        'senary': '#195855',
        'septenary': '#172139',
        'font-color': '#525260',
        'font-color-light': '#E0E0E0',
      }
    },
  },
  plugins: [],
}

