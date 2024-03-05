/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1658px",
      },
      colors: {
        primary: {
          white: "rgb(241 245 249)",
          blue: "rgb(99 167 235)",
        },
        dark: {
          400: "rgb(37 37 37 / 0.7)",
          300: "rgb(28, 28, 28)",
          200: "rgb(37 37 37 / 0.4)",
          100: "rgb(18 18 18)",
        },
      },
    },
  },
  plugins: [],
};
