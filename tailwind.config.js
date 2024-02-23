/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      popins: ["sans-serif", "Poppins"],
      cursive: ["cursive", "Cedarville Cursive"],
    },
    screens: {
      sm: "300px",
      md: "500px",
      lg: "950px",
    },

    extend: {
      colors: {
        color1: "#050d25",
        color2: "#58fff5",
        color3: "#2489e2",
        lightMode1: {
          bgColorWhite: "#ffffff",
          txColor: "#333333",
          btnColor: "#2489e2",
          accent: "58fff5",
        },
        lightMode2: {
          bgColorGray: "#f2f2f2",
          txColor: "#333333",
          btnColor: "#2489e2",
          accent: "58fff5",
        },
        lightMode3: {
          bgColorWhite: "#ffffff",
          txColor: "#000000",
          btnColor: "#2489e2",
          accent: "58fff5",
        },
        lightMode4: {
          bgColorGray: "#f5f5f5",
          txColor: "#333333",
          btnColor: "#2489e2",
          accent: "58fff5",
        },
      },
    },
  },
  plugins: [],
};
