/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-black": "#1000",
        "custom-pink": "#f496ac",
        "custom-gray": "#a6a6a6",
        "custom-light-gray": "#cedodc",
      },
      screens: {
        "sc": "892px",
      },
      fontFamily: {
        'song-myung': ['Song Myung', 'serif'],
        'sora': ['Sora', 'sans-serif'],
        'srisakdi': ['Srisakdi', 'cursive'],
        'stalemate': ['Stalemate', 'cursive'],
      },
    },
  },
  plugins: [],
};
