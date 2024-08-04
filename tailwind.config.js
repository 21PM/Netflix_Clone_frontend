/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xs': '370px',   // Small screens (phones)
        '2xs': '375px',   // Small screens (phones)
        'xs': '430px',   // Small screens (phones)
        'sm': '640px',   // Small screens (phones)
        'md': '768px',   // Medium screens (tablets)
        'lg': '1024px',  // Large screens (desktops)
        'xl': '1280px',  // Extra large screens (larger desktops)
        '2xl': '1536px', // 2x Extra large screens (large monitors)
        'desktop': '1440px' // Custom breakpoint for larger desktops
      },
    },
  },
  plugins: [],
}