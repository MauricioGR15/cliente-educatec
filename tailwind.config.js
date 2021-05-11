module.exports = {
  purge: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
          black: {
              DEFAULT: "#232530",
          },
          violet: {
              DEFAULT: "#8A40A9",
          },
          mint: {
              DEFAULT: "#3DC58E",
              dark: "#74A599",
          },
          blue: {
              DEFAULT: "#3E5B62",
          },
      },
      fontFamily: {
        'work': 'Work Sans, sans-serif',
        'sans': 'Montserrat, sans-serif',
    },
      extend: {},
  },
  
  variants: {
      extend: {},
  },
  plugins: [],
};