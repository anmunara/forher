import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        f1red: "#ff69b4",
        f1black: "#15151E",
        f1dark: "#1F1F27",
        f1gray: "#38383F",
        f1silver: "#949498"
      },
      fontFamily: {
        title: ["Titillium Web", "system-ui", "sans-serif"],
        body: ["Titillium Web", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "f1-grid":
          "linear-gradient(180deg, #15151E 0%, #1F1F27 100%)",
        "f1-hero":
          "linear-gradient(120deg, #15151E 0%, #1F1F27 50%, #ff69b4 140%)"
      }
    }
  },
  plugins: []
};

export default config;
