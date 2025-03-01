/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      bgprimary: "#EFEFEF",
      bgsecondary: "#FFF",
      primary: "#333333",
      secondary: "#8E9CC6",
      tertiary: "#bdc9d1",
      navsecondary: "#0F69B4",
      navprimary: "#337ab7",
      article_primary: "#337ab7",
      article_tertiary: "#7a8791",
      article_secundary: "#475156",
      article_email: "#0f69b4",
      facebook: "#0070bb",
      error: "#f00",

      fourth: "#555",



      five: "#E9C37D",
      six: "#5EA3B5",
      seven: "#f64d52",
      eight: "#102e46", //dark bg
      nine: "#a7b9c3", //clear fg
      ten: "#0b79a7",
      white: "red",
      "blue-300": "blue",
      "blue-600": "blue",
      "blue-700": "blue",
    },
    fontFamily: {
      montserratblack: [
        "montserratblack",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      montserratbold: [
        "monserrat-bold",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      montserratlightitalic: [
        "montserratlightitalic",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      monserrat: [
        "monserrat",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
      ],
      hindlight:[
        "hindlight"
      ]
    },
  },
  plugins: [],
};
