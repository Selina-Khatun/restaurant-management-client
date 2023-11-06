/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { animation: { shine: "shine 1s", }, keyframes: { shine: { "100%": { left: "125%" }, }, }, },
    fontFamily: {
      'dancing-script': ['Dancing Script', 'cursive'],
        'kaushan-script': ['Kaushan Script', 'cursive'],
        'open-sans': ['Open Sans', 'sans-serif'],
      
    },

  },
  plugins: [require("daisyui")],
}

