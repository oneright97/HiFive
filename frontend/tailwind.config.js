/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6392",
          700: "#FF99B8",
          500: "#FFCADA",
          300: "#FFE7EE",
          100: "#FFF1F5",
          text: "#E55883",
        },
        secondary: {
          DEFAULT: "#4FB2FF",
          700: "#A4D7FF",
          500: "#A9D9FF",
          300: "#DBEFFF",
        },
        gray: {
          900: "#333333",
          800: "#4D4D4D",
          700: "#666666",
          600: "#808080",
          500: "#999999",
          400: "#B3B3B3",
          300: "#CCCCCC",
          200: "#E6E6E6",
          100: "#F2F2F2",
        },
        meetingroom: "#7A5A8A",
        yellow: "#FFE45E",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      fontSize: {
        h1: "3rem",
        h2: "2.25rem",
        h3: "1.875rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1.125rem",
        large: "1.125rem",
        medium: "1rem",
        small: "0.875rem",
      },
      backgroundImage: {
        "board-gradient":
          "linear-gradient(to top, #ffffff 60%, #fcebf0 78%, #ffe7ee 100%)",
        "horizontal-gradient":
          "linear-gradient(90deg, #FFFBFB 0%, #FFF1F5 100%)",
        "vertical-gradient":
          "linear-gradient(180deg, #FFF 0%, #FCEBF0 30%, #FFE7EE 100%)",
      },
      boxShadow: {
        "nav-shadow": "0px 1px 5px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
