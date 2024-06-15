/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#5d5d5d",
        firstColor: "#ffba33",
        hoveredColor: "#f4a200",
        buttonColor: "#6c412a",
        unactiveText: "#9ca3af",
        btHovered: "#c3b3a9",
        hoveredGreyBtn: "#f3f4f6",
        greyBtn: "#f9fafb",
        footerColor: "#f8f8f8",
        footerTextColor: "#4f5665",
      },
      boxShadow: {
        primary: " 0px 6px 20px 0px #4F5665;",
      },
      backgroundImage: {
        auth: "url('/public/images/bg-main-coffee.webp')",
        history: "url('/public/images/cold-brew.webp')",
        cart: "url('/public/images/bg-cart.webp')",
        landing: "url('/public/images/bg-main-coffee.webp')",
      },
    },
  },
  plugins: [],
};
