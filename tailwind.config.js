/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require("flowbite/plugin")],
  content: ["./src/**/*.{js,jsx,ts,tsx,flowbite}"],
  theme: {
    extend: {
      // keyframes: {
      //   wave: {
      //     '100%': { opacity: 45 },
      //     '50%': { opacity: 0 },
      //   },
      // },
      // animation: {
      //   'waving-hand': '',
      // },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./src/*/.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
