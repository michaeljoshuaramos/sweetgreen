/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sweetgreen-yellow": "rgb(244, 243, 231)",
        "sweetgreen-black": "rgb(14, 21, 14)",
        "sweetgreen-green-primary": "rgb(0, 71, 60)",
        "sweetgreen-green-secondary": "rgb(169, 193, 169)",
        "sweetgreen-green-tertiary": "rgb(216, 229, 214)",
        "sweetgreen-green-sand": "rgb(232, 220, 198)",
      },
    },
  },
  plugins: [],
};
