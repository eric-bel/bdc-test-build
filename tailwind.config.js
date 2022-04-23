module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      mob: { min: "100px", max: "449px" },
      //  @media (min-width: 100px and max-width: 639px)
      tab: { min: "450px", max: "767px" },
      //  @media (min-width: 640px and max-width: 767px)
      md: { min: "768px", max: "1023px" },
      //  @media (min-width: 768px and max-width: 1023px)
      lap: { min: "1024px", max: "1279px" },
      //  @media (min-width: 1024px and max-width: 1279px)
      desc: { min: "1280px", max: "1535px" },
      //  @media (min-width: 1280px and max-width: 1535px)
      xdesc: { min: "1536px" },
      //  @media (min-width: 1536px)
      min1920: { min: "1919px" },
    },
    extend: {},
  },
  plugins: [],
};
