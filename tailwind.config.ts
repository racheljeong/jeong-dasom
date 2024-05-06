import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors : {
      transparent: "transparent",
      current: "currentColor",
      navy : "#1B1464",
      darkNavy : "#192a56",
      whitesmoke : "#f1f2f6",
      lightIvory : "#f7f1e3",
      mainPurple1 : "#4834d4",
      blueGray : "#95afc0",



    }
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
  },
  plugins: [],
};
export default config;
