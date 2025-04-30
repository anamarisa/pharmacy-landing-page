export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".preserve-3d": { "transform-style": "preserve-3d" },
        ".backface-hidden": { "backface-visibility": "hidden" },
        ".perspective": { perspective: "1000px" },
        ".rotate-y-180": { transform: "rotateY(180deg)" },
      });
    },
  ],
};
