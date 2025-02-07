/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF',  // Custom blue
          secondary: '#F59E0B', // Custom yellow
          dark: '#111827',
          light: '#F3F4F6',
        },
      },
    },
    plugins: [],
  }