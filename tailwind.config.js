/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      popins: ["sans-serif", "Poppins"],
      cursive: ["cursive", "Cedarville Cursive"],
    },
    screens: {
      sm: "300px",
      md: "500px",
      lg: "900px",
    },

    extend: {},
  },
  plugins: [],
};
