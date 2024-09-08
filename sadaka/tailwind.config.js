// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': '500px',
        '3xl': '1800px',
        '4xl': '2096px'
      }
    },
    colors: {
      primaryHeader: '#0f5c9b',
      secondaryHeader: '#1f76bd',
      blue: '#1287e8',
      white: '#FFF',
      transparent: {
        blue: '#2076bd78',
        dardBlue: '#0f5c9bd9'
      }
      
    }
  },
  plugins: [],
};