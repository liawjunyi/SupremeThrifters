/** @type {import('tailwindcss').Config} */
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
      xxl: "2rem",
    },
    padding: {
      xxs: ".3rem",
      xs: ".5rem",
      sm: ".83rem",
      md: "1rem",
      lg: "24px",
      xl: "55px",
    },
    borderRadius: {
      none: "0",
      sm: "10px",
      md: "20px",
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
      },
      boxShadow: {
        preset: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ",
      },
      zIndex: {
        1: "1",
        2: "2",
        5: "5",
        100: "100",
      },
      colors: {
        primary: "#ff4b2b",
        secondary: "white",
        button: "#666666",
      },
    },
  },
  plugins: [],
};
