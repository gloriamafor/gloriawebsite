import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pastelPink: "#f8c8dc",
        pastelDark: "#333",
        pastelLight: "#fff5f8",
      },
    },
  },
  plugins: [],
};



export default config;
