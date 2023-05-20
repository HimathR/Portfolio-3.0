/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        wave: "wave 2.5s infinite",
      },
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%, 50%": { transform: "rotate(14deg)" },
          "20%, 40%": { transform: "rotate(-8deg)" },
        },
      },
    },
  },
  plugins: [],
};
