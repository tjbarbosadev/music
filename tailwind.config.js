/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};
