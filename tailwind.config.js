/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    colors:{
        'custom-blue':'#0B1117',
        'custom-white':'#F9F9F9',
        'custom-blue2':'#0F171F'
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
}

