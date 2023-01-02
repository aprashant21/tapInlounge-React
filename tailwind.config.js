/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color-tpl':'#FFF8EE',
        'btn-color':'#F89808',
        'navLinkColor':'#2A435D',
        'btn-color2':'#101A24'
      }
    },
  },
  plugins: [],
}