/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                  // ← Vite's main HTML
    "./src/**/*.{js,ts,jsx,tsx}",    // ← All your React components
  ],
theme: {
    extend: {
      animation: {
        'slow-pulse': 'pulse 6s infinite ease-in-out',
        'slower-pulse': 'pulse 10s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};

