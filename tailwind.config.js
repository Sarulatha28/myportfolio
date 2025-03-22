module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['playfair display', 'sans-serif'],
      },
      animation: {
        "jump-in": "jumpIn 0.6s ease-in-out",
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        jumpIn: {
          "0%": { opacity: 0, transform: "scale(0.5) translateY(-30px)" },
          "80%": { opacity: 1, transform: "scale(1.1) translateY(10px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
