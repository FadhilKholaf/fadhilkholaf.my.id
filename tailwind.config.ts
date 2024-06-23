import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        intro: {
          "0%": { opacity: "0", transform: "translate(100px)" },
          "100%": { opacity: "1", transform: "translate(0px)" },
        },
      },
      animation: {
        intro: "intro 1s ",
      },
      colors: {
        primary: "#000000",
        secondary: "#F5F5F5",
        accent: "#007BFF",
      },
    },
  },
  plugins: [],
};
export default config;
