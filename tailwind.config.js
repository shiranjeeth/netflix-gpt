/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'vh-wh-minus-100': 'calc(100vh - 100px)', // Adjust this value as needed
      }
    }
  },
  plugins: [],
}