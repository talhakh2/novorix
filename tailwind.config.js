/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                  // ← Vite's main HTML
    "./src/**/*.{js,ts,jsx,tsx}",    // ← All your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
