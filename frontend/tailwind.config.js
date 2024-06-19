/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F27704",
        "base" :"rgba(156 ,163 ,175, 0.5)",
        "input":"rgba(0 ,0 ,0, 0.7)"
      },
      boxShadow:{
        xl: '0px 0px 8px 2px white',
        md: '0px 0px 10px 4px gray',
       lg:'0px 0px 20px 1px white',
      },
    },
  },
  plugins: [],
}

