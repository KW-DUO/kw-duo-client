import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        gray: "#F5F5F5",
        lightGray: "#F9F9F9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#A32828",
        secondary: "#CC2E34",
        silver: "#646464",
        "dark-gray": "#3E4042",
      },

      maxWidth: {
        maxWidth: "1300px",
      },
      width: {
        cardWidth: "300px",
      },
      height: {
        cardHeight: "340px",
      },
      borderColor: {
        grayBorder: "#D1D1D1",
      },
    },
  },
  plugins: [],
};
export default config;
