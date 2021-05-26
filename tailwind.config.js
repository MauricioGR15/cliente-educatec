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
                dark: "#5F2D75",
            },
            mint: {
                DEFAULT: "#3DC58E",
                dark: "#74A599",
            },
            blue: {
                DEFAULT: "#3E5B62",
            },
            white: {
                DEFAULT: "#EEEEEE",
            },
            error: {
                DEFAULT: "#EE1212",
            },
            gray: {
                DEFAULT: "#CBCBCB",
                light: '#EFEFEF',
            },
            red: {
                DEFAULT: '#EB432A',
                dark: '#B83521'
            }
        },
        fontFamily: {
            work: "Work Sans, sans-serif",
            sans: "Montserrat, sans-serif",
        },
        boxShadow: {
            sm: "1px 1px 5px rgba(0, 0, 0, 0.25)",
            DEFAULT: "2px 2px 10px rgba(0, 0, 0, 0.25)",
            md: "4px 4px 10px rgba(0, 0, 0, 0.25)",
            lg: "8px 8px 10px rgba(0, 0, 0, 0.25)",
        },
        extend: {
            zIndex: {
                "-1": "-1",
            },
        },
    },

    variants: {
        extend: {
            backgroundColor: ["active"],
            borderColor: [
                "responsive",
                "hover",
                "focus",
                "focus-within",
                "active",
            ],
            borderWidth: ["hover", "focus", "active"],
            fontWeight: ['hover', 'focus'],
        },
    },
    plugins: [],
};
