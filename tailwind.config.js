/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'max': '1023px'},
      'lg': {'max': '1279px'},
    },
    extend: {
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(200px,0.3fr))',
      }
    },
  },
  plugins: [],
}

