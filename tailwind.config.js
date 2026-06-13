/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#6B7755",
          brown: "#5C4033",
        },
        neutral: {
          beige: "#E8D7C5",
          cream: "#F8F6F2",
          dark: "#2D2D2D",
        },
        accent: {
          gold: "#C5A572",
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
