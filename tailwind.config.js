/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'popins': ['Poppins', 'sans-serif'],
      'ibm': ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'black': {
          100: '#1e293b'
        },
        'orange': {
          100: '#f97316',
          200: '#d65b06',
        },
      },
    },
  },
  plugins: [],
}