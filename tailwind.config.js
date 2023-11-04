/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: ".3rem",
      xs: ".67rem",
      sm: ".83rem",
      md: "1rem",
      lg: "1.17rem",  
      xl: "1.5rem",
      "2xl": "2rem",
    },
    borderRadius: {
      none: "0",
      sm: "10px",
      md: "15px",
      lg: "20px",
      full: "9999px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        tiltneon: ["Tilt Neon"],
      },
      spacing: {
        "1/10": "10%",
        "1/2": "50%",
        xxs: ".3rem",
        xs: ".5rem",
        sm: ".83rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      boxShadow: {
        preset: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      },
      textShadow: {
        neon: "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa;",
      },

      zIndex: {
        1: "1",
        2: "2",
        5: "5",
        100: "100",
      },
      colors: {
        primary: "#1D2B33",
        secondary: "#40646C",
        neon: "#fff",
      },
      screens: {
        xs: "435px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
