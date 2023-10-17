/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#ff4b2b",
      secondary: "white",
      button: "#666666",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      l: "16px",
      xl: "32px",
    },
    padding: {
      xs: "12px",
      md: "16px",
      lg: "24px",
      xl: "55px",
    },
    borderRadius: {
      none: "0",
      md: "20px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
