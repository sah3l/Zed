/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zedPink: "#D08A9B",
        zedOlive: "#C9D3C8",
        zedPurple: "#582BAF",
      },
    },
    fontFamily: {
      sans: ["ui-rounded", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
}
