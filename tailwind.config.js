/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D6A4F",
          light: "#52B788",
          dark: "#1B4332",
        },
        earth: {
          DEFAULT: "#8B5E3C",
          light: "#D4A574",
          dark: "#5C3D1E",
        },
        sky: {
          DEFAULT: "#0EA5E9",
          light: "#BAE6FD",
          dark: "#0369A1",
        },
        surface: {
          DEFAULT: "#F8FAF7",
          card: "#FFFFFF",
          dark: "#0F1C14",
        },
      },
      fontFamily: {
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
