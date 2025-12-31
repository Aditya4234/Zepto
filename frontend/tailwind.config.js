/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'zepto-dark': '#0c0c20', // Deep blue/black background
        'zepto-purple': '#36005c',
        'zepto-pink': '#ff3269',
        'zepto-blue': '#4c25bd', // For gradients
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
