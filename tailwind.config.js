/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.85': '0.85px',
      },
      boxShadow: {
        'custom': '5.51px 11.02px 33.69px 0px rgba(0, 0, 0, 0.35)',
        'custom-sub': '0px 2px 2px 0px #00000040',
      },
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
        "custom-cat" : "#EEEEE4",
        "bo-color": "#D9D9D9"
      },
      screens: {
        "sc": "964px",
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
