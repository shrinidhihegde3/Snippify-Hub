/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
        'stop-scroll': 'paused',
      },
      keyframes: {
        'infinite-scroll': {
          "0%": { transform: 'translateX(90%)' },
          "100%": { transform: 'translateX(-85%)' },
        }
      } 
    },
  },
  plugins: [],
};

