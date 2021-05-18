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
              dark: "#5F2D75"
          },
          mint: {
              DEFAULT: "#3DC58E",
              dark: "#74A599",
          },
          blue: {
              DEFAULT: "#3E5B62",
          },
          white: {
              DEFAULT: '#EEEEEE'
          },
          error: {
              DEFAULT: "#EE1212"
          },
      },
      fontFamily: {
        'work': 'Work Sans, sans-serif',
        'sans': 'Montserrat, sans-serif',
    },
      extend: {
        zIndex: {
            "-1": "-1",
          },
      },
  },
  
  variants: {
      extend: {
          backgroundColor: ['active'],
          borderColor: ['responsive', 'hover', 'focus', 'focus-within','active'],
          borderWidth: ['hover', 'focus','active'],
          
      },
  },
  plugins: [],
};