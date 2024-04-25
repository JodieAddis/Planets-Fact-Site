/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BlackPearl: "#070724",
        BrightGray: "#38384f",
        Waterloo: "#838391",
        Pelorous: "#419ebb", //bleu clair
        TulipTree: "#eda249", //jaune
        PurpleHeart: "#6f2ed6",
        Valencia: "#d14c32", //rouge-orangé
        ElectricValencia: "#d83a34", //rouge-orangé flash
        Piper: "#cd5120", //orange
        Java: "#1ec2a4", //turquoise
        RoyalBlue: "#2d68f0",
        royalBlue: "#2D68F0",
        Tacao: "#ECAD7A", //jupiter
        Goldenrod: "#FCCB6B", //saturn
        Foam: "#DEF4FC", //mercury
        GlacialBlue: "#545bfe",
      },
      fontFamily: {
        Antonio: ["Antonio"],
        Spartan: ["Spartan"],
      },
    },
  },
  plugins: [],
};
