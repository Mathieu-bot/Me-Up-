/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "courteous-blue": "#005F99",
        "coral-orange": "#FF6F61"
      }
    }
  },
  plugins: []
}
