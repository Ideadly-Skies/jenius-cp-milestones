/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  "scripts":{
    "dev":"npx tailwindcss -i ./styles/tailwind.css -o ./styles/output.css --watch"
  },
  plugins: [],
}