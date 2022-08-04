/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require("flowbite/plugin")],
  content: ["./src/**/*.{js,jsx,ts,tsx,flowbite}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
// module.exports = {
//   content: ["./src/*/.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
