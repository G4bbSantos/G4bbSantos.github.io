/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Poetsen-One': ['Poetsen One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

